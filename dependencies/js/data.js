const actionItems = [
    { id: 1, number: '(654) 467-6992', email: 'ze@upzihuf.ag', plan: 'Premium', status: 'Active', empStatus: 'Active', expire: 'Today' },
    { id: 2, number: '(269) 262-2677', email: 'ivi@kuif.nl', plan: 'Premium', status: 'Active', empStatus: 'Active', expire: 'Today' },
    { id: 3, number: '(858) 920-9159', email: 'cikag@gi.sr', plan: 'Premium', status: 'Active', empStatus: 'Active', expire: 'Today' }
];

const orders = [
    { id: 1, company: 'Barry McKenzie', orderedBy: 'Birdie Kim', email: 'catdupe@lobaset.ck', number: '1234567890', date: '17-Oct-2022', qty: 100, cost: '$1200' },
    { id: 2, company: 'Maria Sanchez', orderedBy: 'Lettie Anderson', email: 'tissazo@wetbine.ba', number: '1234567890', date: '17-Oct-2022', qty: 100, cost: '$1200' },
    { id: 3, company: 'Nellie Sharp', orderedBy: 'Rosie Turner', email: 'ruh@umzogim.li', number: '1234567890', date: '17-Oct-2022', qty: 100, cost: '$1200' }
];

const clients = [
    { id: 73, company: 'Aiden Phelps', name: 'Amy Garcia', email: 'sapzezeb@ehawit.gw', location: 'Afghanistan (IE)', count: '100', status: 'Active' },
    { id: 61, company: 'Estella Washington', name: 'Frances Obrien', email: 'andrew@labaf@wi.ietd', location: 'USGrenada (HN)', count: '10k', status: 'Active' }
];

function populateTables() {
    const actionBody = document.getElementById('action-items-body');
    if (actionBody) {
        actionItems.forEach(item => {
            const row = `<tr>
                <td>${item.id}</td>
                <td>${item.number}</td>
                <td>${item.email}</td>
                <td><span class="amber-text"><strong>${item.plan}</strong></span></td>
                <td>${item.status}</td>
                <td>${item.empStatus}</td>
                <td>${item.expire}</td>
                <td>
                    <span class="btn waves-effect waves-light orange darken-1" type="submit" name="action"><i class="material-icons">edit</i></span>
                    <span class="btn waves-effect waves-light blue darken-4" type="submit" name="action"><i class="material-icons">visibility</i></span>
                    <span class="btn waves-effect waves-light red accent-3" type="submit" name="action"><i class="material-icons">delete</i></span>
                </td>
            </tr>`;
            actionBody.insertAdjacentHTML('beforeend', row);
        });
    }
    const ordersBody = document.getElementById('orders-body');
    if (ordersBody) {
        orders.forEach(item => {
            const row = `<tr>
                <td>${item.id}</td>
                <td>${item.company}</td>
                <td>${item.orderedBy}</td>
                <td>${item.email}</td>
                <td>${item.number}</td>
                <td>${item.date}</td>
                <td>${item.qty}</td>
                <td>${item.cost}</td>
                <td><a class="waves-effect waves-light blue darken-4 btn">Order Details<i class="material-icons left">receipt</i></a></td>
            </tr>`;
            ordersBody.insertAdjacentHTML('beforeend', row);
        });
    }
    const clientsBody = document.getElementById('clients-body');
    if (clientsBody) {
        clients.forEach(item => {
            const row = `<tr>
                <td>${item.id}</td>
                <td>${item.company}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.location}</td>
                <td>${item.count}</td>
                <td>${item.status}</td>
                <td class="text-center"><span class="btn waves-effect waves-light blue darken-4" type="submit" name="action"><i class="material-icons">visibility</i></span></td>
            </tr>`;
            clientsBody.insertAdjacentHTML('beforeend', row);
        });
    }
}

document.addEventListener('DOMContentLoaded', populateTables);
