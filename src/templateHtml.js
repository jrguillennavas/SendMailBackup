const temple = (data) =>{
    return(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        table{
            margin: auto;
            width: 100%;
            padding: 2.5px;
            border: 1px solid #000000;
        }
        th{
            font-size: 14px;
            text-align: left;
        }
        td{
            font-size: 12px;
            text-align: left;
        }
        thead th{
            border: 1px solid #000000;
            padding: 2.5px;
        }
        tbody td{
            padding: 2.5px;
        }
        tbody tr{
            padding: 20px;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>SU</th>
                <th>Name</th>
                <th>Size</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            ${
                data.map(item => {
                    let row = `<tr>
                    <td>${item.su}</td>
                    <td>${item.name}</td>
                    <td>${item.size}</td>
                    <td>${item.date}</td>
                    <td>${item.status ? "✅" :"❌"  }</td>
                    </tr>`
                    return row
                }).join('')
            }
        </tbody>
    </table>
</body>
    `)
}

module.exports = temple