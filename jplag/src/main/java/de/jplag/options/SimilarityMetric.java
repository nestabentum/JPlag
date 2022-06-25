package de.jplag.options;

import java.util.function.Function;

import de.jplag.JPlagComparison;
import de.jplag.Messages;

public enum SimilarityMetric implements Function<JPlagComparison, Float> {
    AVG(JPlagComparison::similarity, Messages.getString("SimilarityMetric.Avg.Description")),
    MIN(JPlagComparison::minimalSimilarity, "MIN"),
    MAX(JPlagComparison::maximalSimilarity, Messages.getString("SimilarityMetric.Max.Description")),
    INTERSECTION(it -> (float) it.getNumberOfMatchedTokens(), "Intersection");

    private final Function<JPlagComparison, Float> similarityFunction;
    private final String description;

    SimilarityMetric(Function<JPlagComparison, Float> determinePercentage, String description) {
        this.similarityFunction = determinePercentage;
        this.description = description;
    }

    public boolean isAboveThreshold(JPlagComparison comparison, float similarityThreshold) {
        return similarityFunction.apply(comparison) >= similarityThreshold;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public Float apply(JPlagComparison comparison) {
        return similarityFunction.apply(comparison);
    }
}
