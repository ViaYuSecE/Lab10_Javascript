document.getElementById('loadData1').addEventListener('click', getData1);
document.getElementById('loadData2').addEventListener('click', getData2);

async function getData1() {
    try {
        let response = await fetch('https://api.coinbase.com/v2/currencies');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let jsonData = await response.json();
        let currencies = jsonData.data;
        // console.log(currencies);

        let td = '';
        let th = `<tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Min Size</th>
                </tr>`;

        currencies.forEach(function (currency, index) {
            td += `<tr>
                       <th scope="row">${index + 1}</th>
                       <td>${currency.id}</td>
                       <td>${currency.name}</td>
                       <td>${currency.min_size}</td>
                   </tr>`;
        });

        document.querySelector('h1').innerHTML = "Task 3 - Fetch API";
        document.getElementById('outputTable').innerHTML = td;
        document.getElementById('outputHeader').innerHTML = th;

    } catch (error) {
        console.error('Error:', error);
    }
};

function getData2() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coinbase.com/v2/currencies', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let jsonData = JSON.parse(xhr.responseText);
                let currencies = jsonData.data;
                // console.log(currencies);

                let td = '';
                let th = `<tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Min Size</th>
                </tr>`;

                currencies.forEach(function (currency, index) {
                    td += `<tr>
                       <th scope="row">${index + 1}</th>
                       <td>${currency.id}</td>
                       <td>${currency.name}</td>
                       <td>${currency.min_size}</td>
                   </tr>`;
                });

                document.querySelector('h1').innerHTML = "Task 4 - XHR";
                document.getElementById('outputTable').innerHTML = td;
                document.getElementById('outputHeader').innerHTML = th;

            } else {
                console.error('Error:', xhr.status);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
};