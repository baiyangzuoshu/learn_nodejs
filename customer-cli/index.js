const mongoose=require("mongoose")
const Customer =require("./models/customer")

const db = mongoose.connect("mongodb+srv://test:test1234@cluster0-lzkfi.mongodb.net/test?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology:true
});

const addCustomer = (customer) => { 
    Customer.create(customer)
        .then(customer => { 
            console.info("新用户已经添加...", customer);
            mongoose.connection.close();
            
        }).catch(err => { 
            console.info("新用户添加失败", err);
            mongoose.connection.close();
            
        })
}

const findCustomer = (name) => { 
    let search = new RegExp(name, 'i');
    Customer.find({firstname:search})
        .then(data => { 
            console.info("查找用户成功", data);
            mongoose.connection.close();
        })
        .catch(err => { 
            console.info("查找用户失败!", err);
            mongoose.connection.close();
        })
}

const updateCustomer = (_id,customer) => { 
    Customer.update({ _id }, customer).then(data => { 
        console.info("更新完成" + data);
        mongoose.connection.close();
    })
}

const deleteCustomer = (_id) => { 
    Customer.remove({ _id }).then(data => { 
        console.info("删除完成" + data);
        mongoose.connection.close();
    })
}

const findAllCustomer = () => { 
    Customer.find().then(data => { 
        console.info("全部数据:", data);
        mongoose.connection.close();
    })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    findAllCustomer
}