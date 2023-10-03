//data
const data = {
    api_name: 'Node API',
    api_version: '1.0.1',
    api_endpoint_development: 'http://localhost/api-docs',
    api_endpoint_staging: 'https://npt-yet/api-docs',
    api_endpoint_production: 'http://not-yet/api-docs',
    apis: [
        // Active
        {
            name: 'active',
            description: "Get current order",
            path: '/api/active',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "status": true,
                        "data": [
                            {
                                "order_id": "5a3d6924-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "order_value": 0.1,
                                "order_price": 0.1,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T10:19:36.000Z"
                            },
                            {
                                "order_id": "ce36ca1d-61d1-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "order_value": 10,
                                "order_price": 0.1,
                                "order_qty": 100,
                                "filled_qty": 0,
                                "unfilled_qty": 100,
                                "order_time": "2023-10-03T09:47:03.000Z"
                            },
                            {
                                "order_id": "2c0d363d-61d1-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "order_value": 10,
                                "order_price": 0.1,
                                "order_qty": 100,
                                "filled_qty": 0,
                                "unfilled_qty": 100,
                                "order_time": "2023-10-03T09:42:31.000Z"
                            },
                            {
                                "order_id": "810816a6-61cf-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "order_value": 2000000000,
                                "order_price": 20000000,
                                "order_qty": 100,
                                "filled_qty": 0,
                                "unfilled_qty": 100,
                                "order_time": "2023-10-03T09:30:34.000Z"
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 1,
                            "per_page": 50,
                            "to": 50,
                            "total": 4
                        }
                    }
                }
            }
        },


        // Cancel
        {
            name: 'cancel',
            description: "Cancel order",
            path: '/api/cancel',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
                {
                    key: 'order_id',
                    value: 'ebea3d61-6123-11ee-9f6f-0243f897b3cc',
                    type: 'string',
                    optional: 'no',
                    sample: 'ebea3d61-6123-11ee-9f6f-0243f897b3cc',
                    description: 'order id'
                },
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "status": true,
                        "data": {
                            "id": "b44e9442-61d7-11ee-9f6f-0243f897b3cc",
                            "trade_pair_id": 42,
                            "user_id": 936,
                            "order_type": 1,
                            "side": 1,
                            "price": 182,
                            "status": 1,
                            "average_entry_price": 0,
                            "unit": 1,
                            "unit_out": 0,
                            "unit_cancel": 0,
                            "unit_balance": 1,
                            "created_at": "2023-10-03 10:29:16",
                            "updated_at": null,
                            "deleted_at": null
                        }
                    }
                }
            }
        },


        // create_order
        {
            name: 'create order',
            description: "Create order",
            path: '/api/create_order',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
                {
                    key: 'trade_pair_id',
                    value: '41',
                    type: 'string',
                    optional: 'no',
                    sample: '41',
                    description: 'trade pair id'
                },
                {
                    key: 'wallet_id',
                    value: '2',
                    type: 'string',
                    optional: 'no',
                    sample: '2',
                    description: 'wallet id'
                },
                {
                    key: 'side',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1',
                    description: 'side'
                },
                {
                    key: 'order_type',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1',
                    description: 'order type'
                },
                {
                    key: 'price',
                    value: '0.11',
                    type: 'string',
                    optional: 'no',
                    sample: '0.11',
                    description: 'price'
                },
                {
                    key: 'unit',
                    value: '100',
                    type: 'string',
                    optional: 'no',
                    sample: '100',
                    description: 'unit'
                },
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "message": "Connect Successfully.",
                    "data": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                }
            }
        },


        // kline
        {
            name: 'kline',
            description: "kline",
            path: '/api/kline',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
                {
                    key: 'pair',
                    value: 'BTC-USDT',
                    type: 'string',
                    optional: 'no',
                    sample: 'BTC-USDT, ETH-USDT, ST-USDT',
                    description: 'kline'
                },
                {
                    key: 'size',
                    value: '20',
                    type: 'string',
                    optional: 'no',
                    sample: 'Default = 20',
                    description: 'kline'
                },
                {
                    key: 'period',
                    value: '1min',
                    type: 'string',
                    optional: 'no',
                    sample: '1min, 1hour, 1day',
                    description: 'kline'
                },
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": [
                        {
                            "t": 1696329600,
                            "l": 27602.6,
                            "h": 27606.7,
                            "o": 27599.4,
                            "c": 27606.6,
                            "v": 9.70220047
                        },
                        {
                            "t": 1696329540,
                            "l": 27593.4,
                            "h": 27599.4,
                            "o": 27593.5,
                            "c": 27599.4,
                            "v": 5.2199778699999975
                        },
                        {
                            "t": 1696329480,
                            "l": 27593.4,
                            "h": 27593.5,
                            "o": 27593.5,
                            "c": 27593.5,
                            "v": 1.11435473
                        },
                        {
                            "t": 1696329420,
                            "l": 27593.3,
                            "h": 27594.3,
                            "o": 27594.2,
                            "c": 27593.5,
                            "v": 10.59321193999999
                        },
                        {
                            "t": 1696329360,
                            "l": 27594.2,
                            "h": 27598,
                            "o": 27597.9,
                            "c": 27594.2,
                            "v": 0.8113873899999995
                        }
                    ]
                }
            }
        },


        // order_info
        {
            name: 'order info',
            description: "Order info",
            path: '/api/order_info',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
                {
                    key: 'order_id',
                    value: '4da14757-61d9-11ee-9f6f-0243f897b3cc',
                    type: 'string',
                    optional: 'no',
                    sample: '4da14757-61d9-11ee-9f6f-0243f897b3cc',
                    description: 'order id'
                },
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "status": true,
                        "data": [
                            {
                                "order_id": "4da14757-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "order_value": 11,
                                "order_price": 0.11,
                                "order_qty": 100,
                                "filled_qty": 0,
                                "unfilled_qty": 100,
                                "order_time": "2023-10-03T10:40:43.000Z"
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 1,
                            "per_page": 50,
                            "to": 50,
                            "total": 1
                        }
                    }
                }
            }
        },


        // tickers
        {
            name: 'tickers',
            description: "Tickers",
            path: '/api/tickers',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "m": {
                            "n": "https://bjexpub.s3.ap-southeast-1.amazonaws.com/staging/2022/09/"
                        },
                        "dt": [
                            {
                                "n": "BTC",
                                "i": "1663832654_6906_BTC.png",
                                "p": "27602.70",
                                "c": "-2.52"
                            },
                            {
                                "n": "TRX",
                                "i": "1663832602_1562_TRX.png",
                                "p": "0.09",
                                "c": "-1.70"
                            },
                            {
                                "n": "ETH",
                                "i": "1663832629_8763_ETH.png",
                                "p": "1658.52",
                                "c": "-4.24"
                            },
                            {
                                "n": "BNB",
                                "i": "1663832583_2343_BNB.png",
                                "p": "215.03",
                                "c": "-2.05"
                            },
                            {
                                "n": "XRP",
                                "i": "1663832534_4724_XRP.png",
                                "p": "0.51",
                                "c": "-2.91"
                            },
                            {
                                "n": "ADA",
                                "i": "1663832515_3804_ADA.png",
                                "p": "0.26",
                                "c": "-2.66"
                            },
                            {
                                "n": "DOGE",
                                "i": "1663832476_8943_DOGE.png",
                                "p": "0.06",
                                "c": "-2.86"
                            },
                            {
                                "n": "DOT",
                                "i": "1663832459_5505_DOT.png",
                                "p": "4.14",
                                "c": "-2.94"
                            },
                            {
                                "n": "MATIC",
                                "i": "1663832435_3224_MATIC.png",
                                "p": "0.57",
                                "c": "0.09"
                            },
                            {
                                "n": "SHIB",
                                "i": "1663832412_5256_SHIB.png",
                                "p": "0.00",
                                "c": "-3.49"
                            },
                            {
                                "n": "AVAX",
                                "i": "1663833874_0629_AVAX.png",
                                "p": "9.38",
                                "c": "-4.00"
                            },
                            {
                                "n": "ATOM",
                                "i": "1663832378_0266_ATOM.png",
                                "p": "7.19",
                                "c": "-4.71"
                            },
                            {
                                "n": "LTC",
                                "i": "1663832360_3738_LTC.png",
                                "p": "65.91",
                                "c": "-2.82"
                            },
                            {
                                "n": "UNI",
                                "i": "1663832338_3644_UNI.png",
                                "p": "4.48",
                                "c": "-3.91"
                            },
                            {
                                "n": "ETC",
                                "i": "1663832300_5389_ETC.png",
                                "p": "16.25",
                                "c": "-2.40"
                            },
                            {
                                "n": "XMR",
                                "i": "1663833857_3358_XMR.png",
                                "p": "146.08",
                                "c": "-2.19"
                            },
                            {
                                "n": "LUNC",
                                "i": "1663832240_5727_LUNC.png",
                                "p": "0.00",
                                "c": "-4.47"
                            },
                            {
                                "n": "VET",
                                "i": "1663832173_9726_VET.png",
                                "p": "0.02",
                                "c": "-2.60"
                            },
                            {
                                "n": "APE",
                                "i": "1663832105_6138_APE.png",
                                "p": "1.16",
                                "c": "-6.97"
                            },
                            {
                                "n": "EOS",
                                "i": "1663832079_2097_EOS.png",
                                "p": "0.60",
                                "c": "-0.76"
                            },
                            {
                                "n": "XTZ",
                                "i": "1663834107_4296_XTZ.png",
                                "p": "0.68",
                                "c": "-2.28"
                            },
                            {
                                "n": "MANA",
                                "i": "1663832039_2929_MANA.png",
                                "p": "0.31",
                                "c": "-3.69"
                            },
                            {
                                "n": "SAND",
                                "i": "1663833772_2398_SAND.png",
                                "p": "0.31",
                                "c": "-3.99"
                            },
                            {
                                "n": "CHZ",
                                "i": "1663831840_1802_CHZ.png",
                                "p": "0.06",
                                "c": "-2.08"
                            },
                            {
                                "n": "AXS",
                                "i": "1663831632_9489_AXS.png",
                                "p": "4.58",
                                "c": "-2.90"
                            },
                            {
                                "n": "EGLD",
                                "i": "1663831603_9942_EGLD.png",
                                "p": "24.78",
                                "c": "-4.29"
                            },
                            {
                                "n": "AAVE",
                                "i": "1663831535_0736_AAVE.png",
                                "p": "69.81",
                                "c": "-0.73"
                            },
                            {
                                "n": "FLOW",
                                "i": "1665558125_6902_FLOW.png",
                                "p": "0.45",
                                "c": "-4.14"
                            },
                            {
                                "n": "BCH",
                                "i": "1663832548_8623_BCH.png",
                                "p": "240.42",
                                "c": "-1.26"
                            },
                            {
                                "n": "FIL",
                                "i": "1663832127_8433_FIL.png",
                                "p": "3.34",
                                "c": "-2.67"
                            },
                            {
                                "n": "ICP",
                                "i": "1663832219_7967_ICP.png",
                                "p": "3.12",
                                "c": "-5.09"
                            },
                            {
                                "n": "ALGO",
                                "i": "1663832259_2566_ALGO.png",
                                "p": "0.10",
                                "c": "-2.01"
                            },
                            {
                                "n": "XLM",
                                "i": "1663832320_6297_XLM.png",
                                "p": "0.11",
                                "c": "-2.65"
                            },
                            {
                                "n": "SOL",
                                "i": "1663832497_9584_SOL.png",
                                "p": "24.12",
                                "c": "-0.30"
                            },
                            {
                                "n": "QNT",
                                "i": "1663834435_4459_QNT.png",
                                "p": "88.51",
                                "c": "-2.50"
                            },
                            {
                                "n": "ST",
                                "i": "https://bjexpub.s3.ap-southeast-1.amazonaws.com/staging/2023/03/SXT.png",
                                "p": "0.10",
                                "c": "-1.51"
                            },
                            {
                                "n": "BEAT",
                                "i": "https://bjexpub.s3.ap-southeast-1.amazonaws.com/staging/2023/08/BEAT.png",
                                "p": "184.46",
                                "c": "-2.53"
                            },
                            {
                                "n": "USDT",
                                "i": "1663832566_1843_USDT.png",
                                "p": "1.00",
                                "c": "0"
                            }
                        ]
                    }
                }
            }
        },


        // trade_histoy
        {
            name: 'trade history',
            description: "Trade history",
            path: '/api/trade_histoy',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "status": true,
                        "data": [
                            {
                                "id": "4d1218fb-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:40:42.000Z",
                                "transaction_id": 272259,
                                "order_id": "f2afb178-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "4d1218fb-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:40:42.000Z",
                                "transaction_id": 272258,
                                "order_id": "f2afb178-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "4c545046-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:40:41.000Z",
                                "transaction_id": 272257,
                                "order_id": "2c80e3db-61d9-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "4c545046-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:40:41.000Z",
                                "transaction_id": 272256,
                                "order_id": "2c80e3db-61d9-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "4b99646c-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 10.78,
                                "filled_price": 0.11,
                                "filled_qty": 98,
                                "trading_fee": 0.98,
                                "filled_time": "2023-10-03T10:40:39.000Z",
                                "transaction_id": 272255,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "4b99646c-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 10.78,
                                "filled_price": 0.11,
                                "filled_qty": 98,
                                "trading_fee": 0.98,
                                "filled_time": "2023-10-03T10:40:39.000Z",
                                "transaction_id": 272254,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "3051e6bb-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:39:54.000Z",
                                "transaction_id": 272252,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "3051e6bb-61d9-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:39:54.000Z",
                                "transaction_id": 272251,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "f63b2442-61d8-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:38:16.000Z",
                                "transaction_id": 272248,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "f63b2442-61d8-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:38:16.000Z",
                                "transaction_id": 272247,
                                "order_id": "6e7000a8-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "b679eef2-61d8-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 1.82,
                                "filled_time": "2023-10-03T10:36:29.000Z",
                                "transaction_id": 272243,
                                "order_id": "b5f182d6-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "0a432ab3-61d8-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:31:40.000Z",
                                "transaction_id": 272240,
                                "order_id": "03b698b3-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "0a432ab3-61d8-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:31:40.000Z",
                                "transaction_id": 272239,
                                "order_id": "03b698b3-61d8-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "b17b4136-61d7-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 1.82,
                                "filled_time": "2023-10-03T10:29:11.000Z",
                                "transaction_id": 272234,
                                "order_id": "b1094b49-61d7-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "90596ed9-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:21:06.000Z",
                                "transaction_id": 272232,
                                "order_id": "8a6b5248-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "90596ed9-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:21:06.000Z",
                                "transaction_id": 272231,
                                "order_id": "8a6b5248-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "80337683-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:20:39.000Z",
                                "transaction_id": 272228,
                                "order_id": "7fe12ecd-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "80337683-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:20:39.000Z",
                                "transaction_id": 272227,
                                "order_id": "7fe12ecd-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "6bf55212-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 0.11,
                                "filled_price": 0.11,
                                "filled_qty": 1,
                                "trading_fee": 0.0011,
                                "filled_time": "2023-10-03T10:20:05.000Z",
                                "transaction_id": 272224,
                                "order_id": "6bc7b5d5-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "609f96b4-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:19:46.000Z",
                                "transaction_id": 272222,
                                "order_id": "125a5363-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "609f96b4-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 0.01,
                                "filled_time": "2023-10-03T10:19:46.000Z",
                                "transaction_id": 272221,
                                "order_id": "125a5363-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "0b640d18-61d6-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 1.82,
                                "filled_time": "2023-10-03T10:17:23.000Z",
                                "transaction_id": 272217,
                                "order_id": "0ae809c5-61d6-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "8a9f8cc6-61d5-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 1.82,
                                "filled_time": "2023-10-03T10:13:47.000Z",
                                "transaction_id": 272215,
                                "order_id": "8a62170b-61d5-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "208a700c-61d5-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 182,
                                "filled_price": 182,
                                "filled_qty": 1,
                                "trading_fee": 1.82,
                                "filled_time": "2023-10-03T10:10:49.000Z",
                                "transaction_id": 272213,
                                "order_id": "203dec29-61d5-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "de0a9103-61d1-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "dirention_name": "Sell",
                                "filled_value": 18200,
                                "filled_price": 182,
                                "filled_qty": 100,
                                "trading_fee": 182,
                                "filled_time": "2023-10-03T09:47:29.000Z",
                                "transaction_id": 272208,
                                "order_id": "ddb48e0d-61d1-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "3f923b9e-61cd-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 11,
                                "filled_price": 0.11,
                                "filled_qty": 100,
                                "trading_fee": 1,
                                "filled_time": "2023-10-03T09:14:25.000Z",
                                "transaction_id": 272202,
                                "order_id": "3f1f14ff-61cd-11ee-9f6f-0243f897b3cc"
                            },
                            {
                                "id": "3f923b9e-61cd-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 1,
                                "dirention_name": "Buy",
                                "filled_value": 11,
                                "filled_price": 0.11,
                                "filled_qty": 100,
                                "trading_fee": 1,
                                "filled_time": "2023-10-03T09:14:25.000Z",
                                "transaction_id": 272203,
                                "order_id": "3f1f14ff-61cd-11ee-9f6f-0243f897b3cc"
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 1,
                            "per_page": 50,
                            "to": 50,
                            "total": 27
                        }
                    }
                }
            }
        },

        // wallet_assets
        {
            name: 'wallet assets',
            description: "Wallet assets",
            path: '/api/wallet_assets',
            method: 'POST',
            headers: [
                {
                    key: 'id',
                    value: 'application/json',
                    type: 'string',
                    optional: 'no',
                    sample: 'application/json',
                    description: 'content type to be send to server'
                },
                {
                    key: 'token',
                    value: 'deviceId|device_token',
                    type: 'string',
                    optional: 'no',
                    sample: '10260|gg9OaZQmradDJ8uKfuQXbrg0Xl15cKzBe6eAXV50',
                    description: 'content type to be send to server'
                }
            ],
            body: [
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": [
                        {
                            "id": 1,
                            "symbol": "BTC",
                            "balance": "0.000000000000000000",
                            "lock_balance": "0.000000000000000000000000000000"
                        },
                        {
                            "id": 2,
                            "symbol": "ETH",
                            "balance": "0.000000000000000000",
                            "lock_balance": "0.000000000000000000000000000000"
                        },
                        {
                            "id": 3,
                            "symbol": "TRX",
                            "balance": "0.000000000000000000",
                            "lock_balance": "0.000000000000000000000000000000"
                        },
                        {
                            "id": 4,
                            "symbol": "BNB",
                            "balance": "0.000000000000000000",
                            "lock_balance": "0.000000000000000000000000000000"
                        },
                        {
                            "id": 5,
                            "symbol": "USDT",
                            "balance": "9700.225599999998000000",
                            "lock_balance": "10031.100000000000000000000000000000"
                        },
                        {
                            "id": 38,
                            "symbol": "ST",
                            "balance": "797.970000000000000000",
                            "lock_balance": "200.000000000000000000000000000000"
                        },
                        {
                            "id": 41,
                            "symbol": "BEAT",
                            "balance": "894.960000000000000000",
                            "lock_balance": "0.000000000000000000000000000000"
                        }
                    ]
                }
            }
        },
    ]
};


