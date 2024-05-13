
const flames = ["Friends", "Lovers", "Acquaintances", "Married", "Enemies", "Siblings"];

function fillFlames() {
    document.getElementById("flames").innerText = `FLAMES: ${flames.join(", ")}`
}

function readNames() {
    return {
        firstName: document.getElementById("personName1").value.toLowerCase(),
        secondName: document.getElementById("personName2").value.toLowerCase()
    }
}

function getExclusiveCharactersInFirstString(string1, string2) {
    let exclusiveCharacters = []
    for (let i = 0; i < string1.length; i++) {
        if (!string2.includes(string1[i])) {
            exclusiveCharacters.push(string1[i]);
        }
    }
    return exclusiveCharacters
}


function performFlames() {
    let resultElement = document.getElementById("result")
    try {
        let names = readNames()
        let firstNameExclusiveCharacters = getExclusiveCharactersInFirstString(names.firstName, names.secondName);
        let secondNameExclusiveCharacters = getExclusiveCharactersInFirstString(names.secondName, names.firstName);
        let uniqueCharactersLength = firstNameExclusiveCharacters.length + secondNameExclusiveCharacters.length;
        let flamesResult = getFlamesResult(uniqueCharactersLength)
        resultElement.innerText = `They will be... ${flamesResult}`
    } catch (err) {
        console.log(err)
        resultElement.innerText = "Oops, something went wrong"
    } finally {
        setTimeout(() => {
            resultElement.innerText = ""
        }, 5000)
    }
}


function getFlamesResult(uniqueCharactersLength) {
    let cll = new CircularLinkedList()
    flames.map((val) => cll.insert(val))
    let deleteCounter = 0;
    let counter = 0;
    let currentNode = cll.startNode
    if (uniqueCharactersLength == 0) {
        return currentNode.value
    }
    while (true) {
        if (deleteCounter == 5) {
            break;
        }
        counter += 1
        if ((counter % uniqueCharactersLength) == 0) {
            cll.delete(currentNode.value)
            deleteCounter += 1
        }
        currentNode = currentNode.next
    }
    return currentNode.value
}
