package de.jplag.clustering;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.BiFunction;
import java.util.stream.Collectors;

/**
 * Cluster part of a {@link ClusteringResult}.
 * @param <T> type of the clusters members
 */
public class Cluster<T> {

    private final float communityStrength;
    private final Collection<T> members;
    private ClusteringResult<T> clusteringResult = null;

    public Cluster(Collection<T> members, float communityStrength) {
        this.members = new ArrayList<>(members);
        this.communityStrength = communityStrength;
    }

    public Collection<T> getMembers() {
        // TODO Check why access to local attribute.
        return members;
    }

    /**
     * See {@link ClusteringResult#getCommunityStrength}
     * @return community strength of the cluster
     */
    public float getCommunityStrength() {
        return communityStrength;
    }

    /**
     * Sets this clusters clustering result. Should only be called by classes extending {@link ClusteringResult} on their
     * own clusters.
     * @param clusteringResult the clustering result
     */
    public void setClusteringResult(ClusteringResult<T> clusteringResult) {
        this.clusteringResult = clusteringResult;
    }

    /**
     * @return How much each member of this cluster contributes to the {@link ClusteringResult#getCommunityStrength}.
     */
    public float getCommunityStrengthPerConnection() {
        int size = getMembers().size();
        if (size < 2)
            return 0;
        return getCommunityStrength() / connections();
    }

    /**
     * Computes a normalized community strength per connection. Can be used as measure for strength of evidence in
     * comparison to other clusters in the same clustering. Guaranteed to be smaller than 1. Negative values indicate
     * non-clusters. This method may only be called on clusters that are part of a ClusteringResult.
     * @return normalized community strength per connection
     */
    public float getNormalizedCommunityStrengthPerConnection() {
        List<Cluster<T>> goodClusters = clusteringResult.getClusters().stream().filter(cluster -> cluster.getCommunityStrength() > 0).toList();
        float posCommunityStrengthSum = (float) goodClusters.stream().mapToDouble(Cluster::getCommunityStrengthPerConnection).sum();

        int size = clusteringResult.getClusters().size();
        if (size < 2)
            return getCommunityStrengthPerConnection();
        return getCommunityStrengthPerConnection() / posCommunityStrengthSum;
    }

    /**
     * How much this cluster is worth during optimization.
     */
    public double getWorth(BiFunction<T, T, Float> similarity) {
        double communityStrength = getCommunityStrength();
        if (getMembers().size() > 1) {
            communityStrength /= connections();
        }
        double averageSimilarity = averageSimilarity(similarity);
        return communityStrength * averageSimilarity;
    }

    /**
     * Computes the average similarity inside the cluster.
     * @param similarity function that supplies the similarity of two cluster members.
     * @return average similarity
     */
    public float averageSimilarity(BiFunction<T, T, Float> similarity) {
        List<T> members = new ArrayList<>(getMembers());
        if (members.size() < 2) {
            return 1;
        }
        float similaritySum = 0;
        for (int i = 0; i < members.size(); i++) {
            for (int j = i + 1; j < members.size(); j++) {
                similaritySum += similarity.apply(members.get(i), members.get(j));
            }
        }
        return similaritySum / connections();
    }

    private int connections() {
        int size = getMembers().size();
        return ((size - 1) * size) / 2;
    }

    /**
     * Whether this cluster is very uninformative or wrong and should be pruned as last step of the clustering process.
     * @return is bad
     */
    public boolean isBadCluster() {
        return getMembers().size() < 2 || getCommunityStrength() < 0;
    }
}