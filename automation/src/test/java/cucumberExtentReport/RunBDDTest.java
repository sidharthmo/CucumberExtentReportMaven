package cucumberExtentReport;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentCucumberReport/report.html","html:target/DetailedCucumberReport"},
        glue = { "com.cucumberExtentReport" }, 
        monochrome = true,
        features = "src/main/resources/com"
        )
public class RunBDDTest
{
}