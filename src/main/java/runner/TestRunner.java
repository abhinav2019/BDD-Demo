package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:/Workspace/BDDDemo1/src/main/java/feature/login.feature", 
		glue= {"stepDefinition"},
		tags= {"@smokeTest"},
		plugin = {"pretty", "html:test-output",
						    "json:test-output/cucumber.json"}
		)

public class TestRunner {

}
