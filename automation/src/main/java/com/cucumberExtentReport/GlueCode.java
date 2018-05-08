package com.cucumberExtentReport;

import java.io.File;
import java.io.IOException;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class GlueCode 
{
	@Given("^there are (\\d+) cucumbers$")
	public void there_are_cucumbers(int arg1) throws Throwable 
	{
	    System.out.println("@Given(\"^there are (\\\\d+) cucumbers$\")");
	    Reporter.addStepLog("Starting  TC");
	    
	}

	@When("^I eat (\\d+) cucumbers$")
	public void i_eat_cucumbers(int arg1) throws Throwable 
	{
		System.out.println("@When(\"^I eat (\\\\d+) cucumbers$\")");
	}

	@Then("^I should have (\\d+) cucumbers$")
	public void i_should_have_cucumbers(int arg1) throws Throwable 
	{
		System.out.println("@Then(\"^I should have (\\\\d+) cucumbers$\")");
	}
	
    @Before
    public static void extentReport() throws IOException
    {
        String reportFileName = System.getProperty("user.dir") + File.separator + "src" + File.separator + "main" + File.separator
                + "resources" + File.separator + "report.xml";
        Reporter.loadXMLConfig(new File(reportFileName));

    }
    
	@After
	public final void Scenariolog(Scenario scenario) throws Exception 
	{
		Reporter.addStepLog("closing  TC"+scenario.getName());
	}

}
