const { exec } = require("child_process");

exec(`flow scripts execute ../scripts/get_account_info.cdc --arg Address:"0xe601ef1f3ff75421" --network=testnet`, (error, stdout, stderr)=>{
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
})