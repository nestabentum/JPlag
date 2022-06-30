package de.jplag.reporting.jsonfactory;

import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.jplag.reporting.reportobject.model.ComparisonReport;
import de.jplag.reporting.reportobject.model.JPlagReport;

/**
 * Factory class, responsible for creating Json strings and writing them to files.
 */
public class JsonFactory {

    private static final Logger logger = LoggerFactory.getLogger(JsonFactory.class);

    private static final ObjectMapper mapper = new ObjectMapper();

    /**
     * Uses Jackson to create Json Strings from JPlagReport object.
     * @return A list, first element is Json String of Overview object. The rest elements are Json Strings of Comparison
     * objects.
     */
    public static List<String> getJsonStrings(JPlagReport jPlagReport) {
        List<String> jsonReports = new ArrayList<>();
        try {
            jsonReports.add(mapper.writeValueAsString(jPlagReport.overviewReport()));
            for (ComparisonReport comparisonReport : jPlagReport.comparisons()) {
                jsonReports.add(mapper.writeValueAsString(comparisonReport));
            }
        } catch (JsonProcessingException e) {
            logger.error("Error converting object to json " + e.getMessage());
        }
        return jsonReports;
    }

    /**
     * Creates Json Files for the given JPlagReport and saves them in the given folder.
     * @return A boolean, representing whether the process was successful.
     */
    public static boolean saveJsonFiles(JPlagReport jPlagReport, String folderPath) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(Path.of(folderPath, "overview.json").toFile(), jPlagReport.overviewReport());
            for (ComparisonReport report : jPlagReport.comparisons()) {
                String name = report.getFirstSubmissionId().concat("-").concat(report.getSecondSubmissionId()).concat(".json");
                mapper.writeValue(Path.of(folderPath, name).toFile(), report);
            }
        } catch (IOException e) {
            logger.error("Failed to save json files: " + e.getMessage(), e);
            return false;
        }
        return true;
    }
}
