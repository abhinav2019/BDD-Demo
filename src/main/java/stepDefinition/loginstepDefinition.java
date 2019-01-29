package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;

//import cucumber.api.java.en.*;

public class loginstepDefinition {
	
	WebDriver driver;
	
	@Given("^user launches site$")
	public void user_launches_site()
	{
	 System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers//chromedriver.exe");
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();
     driver.get("https://demo.guru99.com/v4");
	}
	
	@When("^he enters uesrname \"(.*)\" and password \"(.*)\"$")
	public void he_enters_uesrname_and_password(String u_name,String password)
	{
		driver.findElement(By.xpath(".//input[@name=\"uid\"]")).sendKeys(u_name);
		driver.findElement(By.xpath(".//input[@name=\"password\"]")).sendKeys(password);
		driver.findElement(By.xpath(".//input[@name=\"btnLogin\"]")).click();
	}
	
	@Then("^he should be navigated to homepage$")
	public void he_should_be_navigated_to_homepage ()
	{
		System.out.println("Title of page is:"+driver.getTitle());
		assertEquals("Guru99 Bank Manager HomePage", driver.getTitle());
		driver.quit();
	}
	

}
