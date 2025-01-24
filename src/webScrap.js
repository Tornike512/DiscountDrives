import axios from "axios";
import { Cheerio } from "cheerio";

const url =
  "https://www.myauto.ge/ka/s/iyideba-manqanebi?0=page&vehicleType=0&bargainType=0&mansNModels=&priceTo=10000&currId=3&mileageType=1&locations=2&customs=1&sort=1&page=1&layoutId=1";

const scrapeWebsite = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = Cheerio.load(response.data);

    const cars = $(
      "div.mx-[16px].sm\\:mx-[0px].rounded-[16px].mb-[10px].group.bg-white-100"
    );

    cars.each((index, element) => {
      const title = $(element).find("h2").text().trim();
      const price = $(element).find(".price").text().trim();
      const details = $(element).find(".details").text().trim();

      console.log(`Car ${index + 1}:`);
      console.log("Title:", title || "N/A");
      console.log("Price:", price || "N/A");
      console.log("Details:", details || "N/A");
      console.log("-".repeat(40));
    });
  } catch (error) {
    console.error("Error fetching the website:", error.message);
  }
};

scrapeWebsite();
