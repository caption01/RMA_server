module.exports = (app, db) => {

    // get all order
    app.get('/orders', async (req, res) => {

        try {
            const resultFromOrdersTable = await db.orders.findAll()

            res.status(200).send(resultFromOrdersTable)
        } catch (err) {
            console.log(`get orders ps error`)
            res.status(501).send(err.message)
        }

    })

    // get order list for specific customer 
    app.get('/orders/:tableNumber', async (req, res) => {
        const tableNumber = req.params.tableNumber
    
        try {
            const resultFromOrdersTable = await db.orders.findAll({
                where: {
                    status: 1,
                    table_number: tableNumber
                }
            })

            const OrderList = resultFromOrdersTable
                .map(order => {
                    let orderObj = {
                        name: order.menu_name,
                        unit: order.quantity
                    }
                    return orderObj
                })

            res.status(200).send(OrderList)
        } catch (err) {
            console.log(`get orders ps error`)
            res.status(501).send(err.message)
        }

    })

    // create order from customer 
    app.post('/orders', (req, res) => {
        const orderList = req.body.order_list
        console.log(orderList)

        orderList.forEach(order => {
            let orderToOrdersTable = {
                status: req.body.status,
                table_number: req.body.table_number,
                menu_name: order.name,
                quantity: order.unit,
                bill_id: req.body.bill_id
            }
            db.orders.create(orderToOrdersTable)
                .then(result => console.log('order has been create'))
                .catch(err => res.status(500).send(`order create ps error \n ${err}`))
        })

        res.status(200).send('your order has een recieved')
    })


    //close status order from kitchen
    app.put('/orders', (req, res) => {
        const selectedOrder = req.body.order_id

        db.orders.update({
            status: false
        },{
            where: {
                order_id: selectedOrder
            }
        })
            .then(resutl => {
                res.status(200).send('selected order closed')
            })
            .catch(err => res.status(500).send(`close status order ps error \n ${err}`))

    })


    // clear order and create history order
    app.delete('/orders', (req, res) => {

        const OrderItem = req.body

        const orderToClear = {
            menu_name: OrderItem.menu_name,
            quantity: OrderItem.quantity,
            bill_id:  OrderItem.bill_id
        }

        db.orders.destroy({
            where: {
              order_id: OrderItem.order_id
            }
        }).then(result => db.historys.create(orderToClear))
            .then(res.status(200).send('confirm order success'))
            .catch(err => res.status(500).send(`cant serve order ${err}`))
    })

}