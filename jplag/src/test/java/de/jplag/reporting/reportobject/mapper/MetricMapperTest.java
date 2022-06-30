package de.jplag.reporting.reportobject.mapper;

import de.jplag.JPlagComparison;
import de.jplag.JPlagResult;
import de.jplag.Submission;
import de.jplag.reporting.reportobject.model.Metric;
import de.jplag.reporting.reportobject.model.TopComparison;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Array;
import java.util.List;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class MetricMapperTest {
    private final MetricMapper metricMapper = new MetricMapper();

    @Test
    public void test_getAverageMetric() {
        // given
        JPlagResult jPlagResult = mock(JPlagResult.class);
        int[] averageDistribution = new int[]{2, 3, 5,7,11,13,17,19,23,29};
        doReturn(averageDistribution).when(jPlagResult).getSimilarityDistribution();

        Submission submission = mock(Submission.class);
        doReturn("Submission 1").when(submission).getName();
        Submission submission1 = mock(Submission.class);
        doReturn("Submission 2"). when(submission1).getName();
        JPlagComparison comparison1 = mock(JPlagComparison.class);
        doReturn(submission).when(comparison1).getFirstSubmission();
        doReturn(submission1).when(comparison1).getSecondSubmission();
        doReturn(0.7f).when(comparison1).similarity();

        doReturn(List.of(comparison1)).when(jPlagResult).getComparisons();

       // when
        var result = metricMapper.getAverageMetric(jPlagResult);

        // then
var expected = new Metric("AVG",List.of(2,3,5,7,11,13,17,19,23,29),List.of(
        new TopComparison("Submission 1", "Submission 2", 0.7f)
),"Average of both program coverages. This is the default similarity which works in most cases: Matches with a high average similarity indicate that the programs work in a very similar way.");
        Assertions.assertEquals(expected,result);
    }
}
