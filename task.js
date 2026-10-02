const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function manipulateWindow() {
    let myWindow = window.open("", "", "width=300,height=300");

    await delay(2000);
    myWindow.resizeTo(500, 500);

    await delay(2000);
    myWindow.moveTo(200, 200);

    await delay(2000);
    myWindow.close();
}

manipulateWindow();
