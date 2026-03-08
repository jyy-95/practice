# 学生食堂饭卡管理系统

基于 Qt 6 开发的学生食堂饭卡管理系统，支持饭卡注册、充值、消费、退款、查询等功能。

## 功能特点

- **饭卡注册**: 支持学生信息录入，包括学号、姓名、电话、院系
- **充值功能**: 支持饭卡充值
- **消费功能**: 支持食堂消费扣款
- **退款功能**: 支持退款操作
- **余额查询**: 查询学生余额和交易记录
- **数据管理**: 系统日志、统计数据、数据导出

## 编译方法

### Windows (Qt 6.10)

```bash
cd cafeteria_system
mkdir build
cd build
cmake .. -G "MinGW Makefiles" -DCMAKE_PREFIX_PATH="C:/Qt/6.10.0/mingw_64"
cmake --build .
```

或者使用 Qt Creator:
1. 打开 Qt Creator
2. 选择 "打开项目"
3. 选择 `CMakeLists.txt`
4. 配置 Qt 6.10 编译器
5. 点击运行

### Linux

```bash
cd cafeteria_system
mkdir build
cd build
cmake ..
make
./cafeteria_system
```

### macOS

```bash
cd cafeteria_system
mkdir build
cd build
cmake ..
make
./cafeteria_system.app/Contents/MacOS/cafeteria_system
```

## 数据存储

- 学生数据：`students.dat`
- 交易数据：`transactions.dat`
- 导出格式：CSV

## 使用说明

1. 启动程序后，首先在"饭卡注册"页面注册学生信息
2. 在"充值/消费"页面进行充值、消费或退款操作
3. 在"余额查询"页面查询学生余额和交易记录
4. 在"数据管理"页面查看系统日志和统计数据

## 系统要求

- Qt 6.10 或更高版本
- CMake 3.16 或更高版本
- C++17 兼容编译器

## 许可证

MIT License
