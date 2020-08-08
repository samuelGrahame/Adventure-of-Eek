export const ITEM_SUSHI = {
    id: 1,
    itemName: "Sushi",
    itemImage: "sushi.png",
    useText: "It was delicious.",
    buyText: "It will be handy when your health is low.",
    cost: 40
}
export const ITEM_CORNED_BEEF_HASH = {
    id: 1,
    itemName: "Corned Beef Hash",
    itemImage: "corned-beef-hash.png",
    useText: "Reminds you of Christmas breakfast.",
    buyText: "It can provide a significant heal in the heat of battle.",
    cost: 200
}
export const ITEM_SPINACH = {
    id: 1,
    itemName: "Spinach",
    itemImage: "spinach.png",
    useText: "Power radiates throughout your body. Strength increased permanently.",
    buyText: "Legend says a grouchy old guy used this to be stronger than any enemy.",
    cost: 500
}
export const ITEM_SPAGHETTI = {
    id: 1,
    itemName: "Spaghetti",
    itemImage: "spaghetti.png",
    useText: "Speed increased permanently.",
    buyText: "Carbs are great for running.",
    cost: 500
}
export const ITEM_EARL_GREY_TEA = {
    id: 1,
    itemName: "Earl Grey Tea",
    itemImage: "earl-grey-tea.png",
    useText: "Health permanently increased.",
    buyText: "Didn't this tea give Picard immortality?",
    cost: 1000
}

export function UseItem(item, game) {
    const currentGame = game.getCurrentGame();
    if (item === ITEM_SUSHI) {
        let originalHealth = currentGame.currentHealth;
        currentGame.currentHealth += 50;
        if (currentGame.currentHealth > currentGame.health) {
            currentGame.currentHealth = currentGame.health;
        }
        let newHealth = currentGame.currentHealth - originalHealth;
        game.print("You ate " + item.itemName.toLowerCase() + ". " + newHealth + " health restored. " + item.useText);
    }
}