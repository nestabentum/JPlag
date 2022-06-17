package de.jplag.reporting;

import java.io.File;
import java.util.List;

import de.jplag.JPlagResult;
import de.jplag.reporting.jsonfactory.JsonFactory;
import de.jplag.reporting.reportobject.ReportObjectFactory;
import de.jplag.reporting.reportobject.model.JPlagReport;

// ReportImplementation -> JsonReport

/**
 * A report generator which reports the JPlagResult in Json format.
 */
public class JsonReport implements Report {

    @Override
    public List<String> getReportStrings(JPlagResult result) {
        JPlagReport report = ReportObjectFactory.getReportObject(result);
        return JsonFactory.getJsonStrings(report);
    }

    @Override
    public boolean saveReport(JPlagResult result, String path) {
        JPlagReport report = ReportObjectFactory.getReportObject(result);
        File directory = new File(path);
        if (!directory.exists()) {
            if (!directory.mkdirs()) {
                logger.error("Failed to create dir.");
            }
        }
        return JsonFactory.saveJsonFiles(report, path);
    }

}
