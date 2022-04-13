function my_dictionary() {        //creates function and names it "my_dictionary()"//
    var computer = {        //assigns variable name "computer"//
        gpu: "RTX 2070",        //creates KVP of key: "gpu" and value: "RTX 2070"//
        cpu: "AMD R3600X",         //creates KVP of key: "cpu" and value: "AMD R3600X"//
        ram: "Corsair 16 GB",        //creates KVP of key: "ram" and value: "Corsair 16 GB"//
        motherboard: "Corsair B550"        //creates KVP of key: "motherboard" and value: "Corsair B550"//
    };
    delete computer.ram;        //deletes KVP "ram: 'Corsair 16 GB'" from dictionary//
    document.getElementById("dictionary").innerHTML = computer.ram;         //finds element with id of "dictionary" and performs function//
}