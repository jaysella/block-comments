import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export type Customer = {
  customerId: number;
  name: string;
  affiliateCompany: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  age: number;
  loyaltyPlan: boolean;
};

export const CODE = `INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (1, 'Krystyna McIntee', 'Feedfish', null, '414 Merrick Junction', 'Boston', 51, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (2, 'Garrott Meriton', 'Abatz', 'gmeriton1@godaddy.com', '0 Prentice Lane', 'Cambridge', 98, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (3, 'Had Nials', 'Photolist', 'hnials2@surveymonkey.com', null, 'Somerville', 68, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (4, 'Haze Toppes', 'Shufflebeat', 'htoppes3@webs.com', '03258 Buhler Circle', 'Cornwall', 87, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (5, 'Hyacintha Bold', 'Voonix', null, '0127 Vernon Street', 'Port Glaud', 26, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (6, 'Archibald Streeting', 'Linkbuzz', 'astreeting5@canalblog.com', '127 Butterfield Place', 'Oemollo', 64, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (7, 'Balduin Loade', 'Agimba', null, '497 Lukken Point', 'Fenway', 73, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (8, 'Uta Othen', 'Feedfish', 'uothen7@umich.edu', null, 'Reading', 62, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (9, 'Darcie Flahy', null, 'dflahy8@tinypic.com', '1772 8th Way', null, 29, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (10, 'Steffane Fallon', 'Buzzshare', 'sfallon9@economist.com', '99 Brickson Park Junction', null, 54, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (11, 'Cos Vlasenko', 'Skidoo', 'cvlasenkoa@apple.com', '7294 Pepper Wood Parkway', 'Cambridge', 57, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (12, 'Ogdan Feares', 'Feedfish', 'ofearesb@ow.ly', '449 Utah Park', 'Boston', 41, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (13, 'Kaycee Wolstencroft', 'Jaxnation', 'kwolstencroftc@senate.gov', '66 Village Green Pass', 'Seia', 68, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (14, 'Solly Frogley', 'Viva', 'sfrogleyd@cdc.gov', '2793 Little Fleur Hill', 'Mayapusi', 62, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (15, 'Sansone Nattriss', 'Kaymbo', null, '77053 Starling Park', 'Banfora', 30, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (16, 'Clementina Ferrillo', 'Zoomdog', 'cferrillof@t-online.de', null, 'Boston', 65, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (17, 'Brett O''Farrell', 'Agivu', null, '04 Norway Maple Street', null, 31, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (18, 'Rod Daviddi', 'Ozu', 'rdaviddih@istockphoto.com', '04 Bowman Drive', null, 54, TRUE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (19, 'Kippar Dudbridge', null, 'kdudbridgei@wunderground.com', '1 Summit Drive', 'Lexington', 88, FALSE);
INSERT INTO Customers (CustomerID, Name, Affiliate_Company, Email, Address, City, Age, Loyalty_Plan) VALUES (20, 'Ardelis Pershouse', 'Kimia', 'apershousej@opensource.org', '49787 Amoth Court', 'Somerville', 61, FALSE);`;

export const CUSTOMERS: Customer[] = [
  {
    customerId: 1,
    name: "Krystyna McIntee",
    affiliateCompany: "Feedfish",
    email: null,
    address: "414 Merrick Junction",
    city: "Boston",
    age: 51,
    loyaltyPlan: false,
  },
  {
    customerId: 2,
    name: "Garrott Meriton",
    affiliateCompany: "Abatz",
    email: "gmeriton1@godaddy.com",
    address: "0 Prentice Lane",
    city: "Cambridge",
    age: 98,
    loyaltyPlan: false,
  },
  {
    customerId: 3,
    name: "Had Nials",
    affiliateCompany: "Photolist",
    email: "hnials2@surveymonkey.com",
    address: null,
    city: "Somerville",
    age: 68,
    loyaltyPlan: true,
  },
  {
    customerId: 4,
    name: "Haze Toppes",
    affiliateCompany: "Shufflebeat",
    email: "htoppes3@webs.com",
    address: "03258 Buhler Circle",
    city: "Cornwall",
    age: 87,
    loyaltyPlan: false,
  },
  {
    customerId: 5,
    name: "Hyacintha Bold",
    affiliateCompany: "Voonix",
    email: null,
    address: "0127 Vernon Street",
    city: "Port Glaud",
    age: 26,
    loyaltyPlan: true,
  },
  {
    customerId: 6,
    name: "Archibald Streeting",
    affiliateCompany: "Linkbuzz",
    email: "astreeting5@canalblog.com",
    address: "127 Butterfield Place",
    city: "Oemollo",
    age: 64,
    loyaltyPlan: false,
  },
  {
    customerId: 7,
    name: "Balduin Loade",
    affiliateCompany: "Agimba",
    email: null,
    address: "497 Lukken Point",
    city: "Fenway",
    age: 73,
    loyaltyPlan: true,
  },
  {
    customerId: 8,
    name: "Uta Othen",
    affiliateCompany: "Feedfish",
    email: "uothen7@umich.edu",
    address: null,
    city: "Reading",
    age: 62,
    loyaltyPlan: true,
  },
  {
    customerId: 9,
    name: "Darcie Flahy",
    affiliateCompany: null,
    email: "dflahy8@tinypic.com",
    address: "1772 8th Way",
    city: null,
    age: 29,
    loyaltyPlan: true,
  },
  {
    customerId: 10,
    name: "Steffane Fallon",
    affiliateCompany: "Buzzshare",
    email: "sfallon9@economist.com",
    address: "99 Brickson Park Junction",
    city: null,
    age: 54,
    loyaltyPlan: false,
  },
  {
    customerId: 11,
    name: "Cos Vlasenko",
    affiliateCompany: "Skidoo",
    email: "cvlasenkoa@apple.com",
    address: "7294 Pepper Wood Parkway",
    city: "Cambridge",
    age: 57,
    loyaltyPlan: true,
  },
  {
    customerId: 12,
    name: "Ogdan Feares",
    affiliateCompany: "Feedfish",
    email: "ofearesb@ow.ly",
    address: "449 Utah Park",
    city: "Boston",
    age: 41,
    loyaltyPlan: true,
  },
  {
    customerId: 13,
    name: "Kaycee Wolstencroft",
    affiliateCompany: "Jaxnation",
    email: "kwolstencroftc@senate.gov",
    address: "66 Village Green Pass",
    city: "Seia",
    age: 68,
    loyaltyPlan: true,
  },
  {
    customerId: 14,
    name: "Solly Frogley",
    affiliateCompany: "Viva",
    email: "sfrogleyd@cdc.gov",
    address: "2793 Little Fleur Hill",
    city: "Mayapusi",
    age: 62,
    loyaltyPlan: false,
  },
  {
    customerId: 15,
    name: "Sansone Nattriss",
    affiliateCompany: "Kaymbo",
    email: null,
    address: "77053 Starling Park",
    city: "Banfora",
    age: 30,
    loyaltyPlan: true,
  },
  {
    customerId: 16,
    name: "Clementina Ferrillo",
    affiliateCompany: "Zoomdog",
    email: "cferrillof@t-online.de",
    address: null,
    city: "Boston",
    age: 65,
    loyaltyPlan: false,
  },
  {
    customerId: 17,
    name: "Brett O'Farrell",
    affiliateCompany: "Agivu",
    email: null,
    address: "04 Norway Maple Street",
    city: null,
    age: 31,
    loyaltyPlan: false,
  },
  {
    customerId: 18,
    name: "Rod Daviddi",
    affiliateCompany: "Ozu",
    email: "rdaviddih@istockphoto.com",
    address: "04 Bowman Drive",
    city: null,
    age: 54,
    loyaltyPlan: true,
  },
  {
    customerId: 19,
    name: "Kippar Dudbridge",
    affiliateCompany: null,
    email: "kdudbridgei@wunderground.com",
    address: "1 Summit Drive",
    city: "Lexington",
    age: 88,
    loyaltyPlan: false,
  },
  {
    customerId: 20,
    name: "Ardelis Pershouse",
    affiliateCompany: "Kimia",
    email: "apershousej@opensource.org",
    address: "49787 Amoth Court",
    city: "Somerville",
    age: 61,
    loyaltyPlan: false,
  },
];

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    content: (
      <>
        This line inserts the given <CodeSegment>VALUES</CodeSegment> into the{" "}
        <CodeSegment>Customers</CodeSegment> table in the following fields, in
        order:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>CustomerID</CodeSegment>
          </li>
          <li>
            <CodeSegment>Name</CodeSegment>
          </li>
          <li>
            <CodeSegment>Affiliate_Company</CodeSegment>
          </li>
          <li>
            <CodeSegment>Email</CodeSegment>
          </li>
          <li>
            <CodeSegment>Address</CodeSegment>
          </li>
          <li>
            <CodeSegment>Address</CodeSegment>
          </li>
          <li>
            <CodeSegment>City</CodeSegment>
          </li>
          <li>
            <CodeSegment>Age</CodeSegment>
          </li>
          <li>
            <CodeSegment>Loyalty_Plan</CodeSegment>
          </li>
        </ol>
      </>
    ),
  },
];
