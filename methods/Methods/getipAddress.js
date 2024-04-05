const os=require("os")
   



function getlocalIpaddress(){

    const networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces)
    const addresses = [];
    
    for (const name of Object.keys(networkInterfaces)) {
        for (const networkInterface of networkInterfaces[name]) {
            if (networkInterface.family === 'IPv4' && !networkInterface.internal) {
                addresses.push(networkInterface.address);
            }
        }
    }
    const localIPAddress = addresses[0];
    return localIPAddress
}
    

module.exports={getlocalIpaddress}
