const apikey = "0c467713fad1b1bdd510d439e3aac2af";
const apiUrl = "http://apilayer.net/api/live?access_key="+apikey+"&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR";
const eurusd = document.getElementById('eurusd');
const eurgbp = document.getElementById('eurgbp');
const gbpusd = document.getElementById('gbpusd');
const audusd = document.getElementById('audusd');
const usdchf = document.getElementById('usdchf');
const nzdusd = document.getElementById('nzdusd');
const usdjpy = document.getElementById('usdjpy');

const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            usdjpy.innerHTML = '<p>p</p>'
        } else {
                    console.error('Gagal mengambil data');
                }
            };

            xhr.send();