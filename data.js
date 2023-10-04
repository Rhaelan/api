// Data
const data = {
    api_name: 'Node API',
    api_version: '1.0.1',
    api_endpoint_development: 'https://fple-crypt-spot-orders.vercel.app',
    api_endpoint_staging: 'https://fple-crypt-spot-orders.vercel.app',
    api_endpoint_production: 'https://fple-crypt-spot-orders.vercel.app',
    apis: [
        // Active
        {
            name: 'active',
            description: "Get current order",
            path: '/api/active',
            method: 'POST',
            headers: [
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
                    key: 'page',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'string',
                    optional: 'no',
                    sample: '10',
                    description: 'paginate'
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
                                "order_id": "2781206d-626b-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 2,
                                "order_type_name": "Market",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 2,
                                "status_name": "Partially filled",
                                "order_value": 14,
                                "order_price": 0.14,
                                "order_qty": 100,
                                "filled_qty": 6,
                                "unfilled_qty": 94,
                                "order_time": "2023-10-04T04:04:45.000Z"
                            },
                            {
                                "order_id": "25372394-626b-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 2,
                                "order_type_name": "Market",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 2,
                                "status_name": "Partially filled",
                                "order_value": 14,
                                "order_price": 0.14,
                                "order_qty": 100,
                                "filled_qty": 97,
                                "unfilled_qty": 3,
                                "order_time": "2023-10-04T04:04:42.000Z"
                            },
                            {
                                "order_id": "0704983a-625f-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 1,
                                "base_symbol": "USDT",
                                "coin_symbol": "BTC",
                                "trade_pair_name": "BTC/USDT",
                                "order_type": 2,
                                "order_type_name": "Market",
                                "direction": 1,
                                "direction_name": "Buy",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 179.2344279,
                                "order_price": 27477.3,
                                "order_qty": 0.006523,
                                "filled_qty": 0,
                                "unfilled_qty": 0.006523,
                                "order_time": "2023-10-04T02:37:57.000Z"
                            },
                            {
                                "order_id": "c0c8d595-625d-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 1,
                                "base_symbol": "USDT",
                                "coin_symbol": "BTC",
                                "trade_pair_name": "BTC/USDT",
                                "order_type": 2,
                                "order_type_name": "Market",
                                "direction": 1,
                                "direction_name": "Buy",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 199.1829477,
                                "order_price": 27477.3,
                                "order_qty": 0.007249,
                                "filled_qty": 0,
                                "unfilled_qty": 0.007249,
                                "order_time": "2023-10-04T02:28:50.000Z"
                            },
                            {
                                "order_id": "7a181b4b-620e-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "order_type": 2,
                                "order_type_name": "Market",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 181,
                                "order_price": 181,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T17:01:21.000Z"
                            },
                            {
                                "order_id": "559b5585-620d-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 181,
                                "order_price": 181,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T16:53:10.000Z"
                            },
                            {
                                "order_id": "974f3885-61ec-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 186,
                                "order_price": 186,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T12:58:47.000Z"
                            },
                            {
                                "order_id": "8fca6e83-61eb-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 186,
                                "order_price": 186,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T12:51:25.000Z"
                            },
                            {
                                "order_id": "7854be94-61ea-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 187.7,
                                "order_price": 187.7,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T12:43:36.000Z"
                            },
                            {
                                "order_id": "6e0131cc-61ea-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "order_type": 1,
                                "order_type_name": "Limit",
                                "direction": 2,
                                "direction_name": "Sell",
                                "status": 1,
                                "status_name": "Pending",
                                "order_value": 200,
                                "order_price": 200,
                                "order_qty": 1,
                                "filled_qty": 0,
                                "unfilled_qty": 1,
                                "order_time": "2023-10-03T12:43:19.000Z"
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 2,
                            "per_page": 10,
                            "to": 10,
                            "total": 20
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


        // Create Order
        {
            name: 'create order',
            description: "Create order",
            path: '/api/create_order',
            method: 'POST',
            headers: [
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
                    sample: '41 - ST, 42 - BEAT',
                    description: 'trade pair id'
                },
                {
                    key: 'wallet_id',
                    value: '2',
                    type: 'string',
                    optional: 'no',
                    sample: 'Default - 2',
                    description: 'wallet id'
                },
                {
                    key: 'side',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1 - Buy, 2 - Sell',
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


        // Depth
        {
            name: 'depth',
            description: "Depth",
            path: '/api/depth',
            method: 'POST',
            headers: [
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
                    sample: '41 - ST, 42 - BEAT',
                    description: 'trade pair id'
                },
            ],
            response: {
                "status": true,
                "code": 200,
                "msg": "Success",
                "data": {
                    "data": {
                        "buy": [
                            {
                                "order_price": 0.1,
                                "unfilled_qty": 101,
                                "side": 1
                            },
                            {
                                "order_price": 0.11,
                                "unfilled_qty": 300,
                                "side": 1
                            },
                            {
                                "order_price": 0.13,
                                "unfilled_qty": 99.999,
                                "side": 1
                            },
                            {
                                "order_price": 0.14,
                                "unfilled_qty": 557.285,
                                "side": 1
                            }
                        ],
                        "sell": [
                            {
                                "order_price": 0.16,
                                "unfilled_qty": 99.999,
                                "side": -1
                            },
                            {
                                "order_price": 181,
                                "unfilled_qty": 1,
                                "side": -1
                            },
                            {
                                "order_price": 1000,
                                "unfilled_qty": 100,
                                "side": -1
                            },
                            {
                                "order_price": 20000000,
                                "unfilled_qty": 100,
                                "side": -1
                            }
                        ]
                    }
                }
            }
        },


        // Kline
        {
            name: 'kline',
            description: "kline",
            path: '/api/kline',
            method: 'POST',
            headers: [
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
                    sample: 'Default - 20',
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


        // Order Info
        {
            name: 'order info',
            description: "Order info",
            path: '/api/order_info',
            method: 'POST',
            headers: [
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
                {
                    key: 'page',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'string',
                    optional: 'no',
                    sample: '10',
                    description: 'paginate'
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
                                "direction_name": "Buy",
                                "status": 1,
                                "status_name": "Pending",
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
                            "per_page": 10,
                            "to": 10,
                            "total": 1
                        }
                    }
                }
            }
        },


        // Tickers
        {
            name: 'tickers',
            description: "Tickers",
            path: '/api/tickers',
            method: 'POST',
            headers: [
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


        // Trade History
        {
            name: 'trade history',
            description: "Trade history",
            path: '/api/trade_history',
            method: 'POST',
            headers: [
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
                    key: 'page',
                    value: '1',
                    type: 'string',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'string',
                    optional: 'no',
                    sample: '10',
                    description: 'paginate'
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
                                "id": "de5da235-6282-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "filled_value": 905,
                                "filled_price": 181,
                                "filled_qty": 5,
                                "buy_user_id": 225,
                                "sell_user_id": 225,
                                "buy_trading_fee": 0.05,
                                "sell_trading_fee": 9.05,
                                "filled_time": "2023-10-04T06:54:31.000Z"
                            },
                            {
                                "id": "06377744-6281-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 0.42,
                                "filled_price": 0.14,
                                "filled_qty": 3,
                                "buy_user_id": 562,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.03,
                                "sell_trading_fee": 0.004200000000000001,
                                "filled_time": "2023-10-04T06:41:18.000Z"
                            },
                            {
                                "id": "05abe8c8-6281-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 8.4,
                                "filled_price": 0.14,
                                "filled_qty": 60,
                                "buy_user_id": 562,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.6,
                                "sell_trading_fee": 0.084,
                                "filled_time": "2023-10-04T06:41:18.000Z"
                            },
                            {
                                "id": "051e3ca7-6281-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 13.16,
                                "filled_price": 0.14,
                                "filled_qty": 94,
                                "buy_user_id": 562,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.9400000000000001,
                                "sell_trading_fee": 0.13160000000000002,
                                "filled_time": "2023-10-04T06:41:17.000Z"
                            },
                            {
                                "id": "6f39f695-627d-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "filled_value": 181,
                                "filled_price": 181,
                                "filled_qty": 1,
                                "buy_user_id": 562,
                                "sell_user_id": 936,
                                "buy_trading_fee": 0.01,
                                "sell_trading_fee": 1.81,
                                "filled_time": "2023-10-04T06:15:37.000Z"
                            },
                            {
                                "id": "0806fcba-627d-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 14,
                                "filled_price": 0.14,
                                "filled_qty": 100,
                                "buy_user_id": 562,
                                "sell_user_id": 25,
                                "buy_trading_fee": 1,
                                "sell_trading_fee": 0.14,
                                "filled_time": "2023-10-04T06:12:44.000Z"
                            },
                            {
                                "id": "5ec5642d-627a-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 6.3,
                                "filled_price": 0.14,
                                "filled_qty": 45,
                                "buy_user_id": 25,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.45,
                                "sell_trading_fee": 0.06300000000000001,
                                "filled_time": "2023-10-04T05:53:41.000Z"
                            },
                            {
                                "id": "51217d14-627a-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 6.3,
                                "filled_price": 0.14,
                                "filled_qty": 45,
                                "buy_user_id": 25,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.45,
                                "sell_trading_fee": 0.06300000000000001,
                                "filled_time": "2023-10-04T05:53:18.000Z"
                            },
                            {
                                "id": "2919de0d-626b-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 0.14,
                                "filled_price": 0.14,
                                "filled_qty": 1,
                                "buy_user_id": 230,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.01,
                                "sell_trading_fee": 0.0014,
                                "filled_time": "2023-10-04T04:04:48.000Z"
                            },
                            {
                                "id": "286d6c88-626b-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 41,
                                "base_symbol": "USDT",
                                "coin_symbol": "ST",
                                "trade_pair_name": "ST/USDT",
                                "filled_value": 0.14,
                                "filled_price": 0.14,
                                "filled_qty": 1,
                                "buy_user_id": 562,
                                "sell_user_id": 25,
                                "buy_trading_fee": 0.01,
                                "sell_trading_fee": 0.0014,
                                "filled_time": "2023-10-04T04:04:47.000Z"
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 9,
                            "per_page": 10,
                            "to": 10,
                            "total": 84
                        }
                    }
                }
            }
        },

        // Wallet Assets
        {
            name: 'wallet assets',
            description: "Wallet assets",
            path: '/api/wallet_assets',
            method: 'POST',
            headers: [
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


