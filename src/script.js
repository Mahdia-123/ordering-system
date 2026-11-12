const customerName = "Mahdia";
const customerAge = 25;
const avilableBalance = 1000;
const customerChoice = "Burger";

const menuItems = [
  { name: "Pizza", price: 10 },
  { name: "Burger", price: 15 },
  { name: "Pasta", price: 8 },
  { name: "Sandwich", price: 12 },
  { name: "Exit", price: 0 }
];

switch (menuItems.length) {
  case 0:
    console.log("No items available.");
    break;

  case 5:
    console.log("Available Food Menu:");
    console.log(menuItems[0].name, menuItems[0].price);
    console.log(menuItems[1].name, menuItems[1].price);
    console.log(menuItems[2].name, menuItems[2].price);
    console.log(menuItems[3].name, menuItems[3].price);
    break;

  default:
    console.log("Menu is available.");
}

switch (customerChoice) {
  case "Pizza":
    console.log(`You have selected ${menuItems[0].name}.`);
    break;
  case "Burger":
    console.log(`You have selected ${menuItems[1].name}.`);
    break;
  case "Pasta":
    console.log(`You have selected ${menuItems[2].name}.`);
    break;
  case "Sandwich":
    console.log(`You have selected ${menuItems[3].name}.`);
    break;
  case "Exit":
    console.log("Thank you for visiting our restaurant!");
    break;
  default:
    console.log("Invalid choice. Please select a valid item.");
}