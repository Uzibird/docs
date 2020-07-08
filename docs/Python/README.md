::: tip
# 语法
:::

::: tip
## 类
::: 
### some tip
>- **类变量** 与 **实例变量** 即使同名也为不同个体，两者不同 
```Python
class User:
    address = 'info1'
    def change(self, address):
        # 以下赋值创建了新的 实例变量 而非修改类变量
        self.address = address

u = User()
u.change('info2')
print(u.address) # info2
print(User.address) # info1
```
--------------
>- 使用 **property** 函数定义属性
```python
# 四个参数代表 getter setter del doc,可参入0~4个参数， 读 写 删 文
# 参数为函数名。  类下的方法名
name = property(fget=, fset=, fdel=, doc=)

# 读
cls.name
# 写
cls.name(*args)
# 删 , 清空变量值 并非删除 类方法
del cls.name
``` 
--------------

### 封装 

### 继承

### 多态

::: tip
## 装饰器
::: 



::: tip
# 异步
::: 


::: tip
# 模块
::: 