const sendLog = async (level, packageName, message) =>{
const token = process.env.ACCESS_TOKEN;
const loggingUrl = "http://4.224.186.213/evaluation-service/logs";
    
    const logData= {

    stack: "backend",
level,
package: packageName,
message
    };
try{
await fetch(loggingUrl,{
method:"POST",
header:{
"Content-Type": "application/json",
"Authorization":'Bearer ${token}'
},
body: JSON.stringify(logData)
});
}catch(error){
console.error(`[Local Fallback] Failed to send log for ${packageName}:`, error.message);
};
module.exports = {sendLog};
}