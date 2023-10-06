// Data
const data = {
    api_name: 'Node API',
    api_version: '1.0.1',
    api_endpoint_staging: 'https://spot-orders.exnice.xyz',
    // api_endpoint_production: 'https://spot-orders.exnice.xyz',
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
                    type: 'interger',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'interger',
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
                    type: 'interger',
                    optional: 'no',
                    sample: '41 - ST, 42 - BEAT',
                    description: 'trade pair id'
                },
                {
                    key: 'depth',
                    value: '2',
                    type: 'interger',
                    optional: 'yes',
                    sample: '2',
                    description: 'depth'
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
                                "order_price": 0.13,
                                "unfilled_qty": 100,
                                "side": 1
                            },
                            {
                                "order_price": 0.11,
                                "unfilled_qty": 300,
                                "side": 1
                            }
                        ],
                        "sell": [
                            {
                                "order_price": 0.14,
                                "unfilled_qty": 9275721.858,
                                "side": -1
                            },
                            {
                                "order_price": 0.16,
                                "unfilled_qty": 500,
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
                    type: 'interger',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'interger',
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
                    "data": [
                        {
                            "channel": "ticker",
                            "bidSize": 101,
                            "askSize": 9275722.858,
                            "count": 45,
                            "open": 0.14,
                            "high": 0.14,
                            "low": 0.14,
                            "close": 0.14,
                            "volume": 725473.142,
                            "amount": 101566.23988000001,
                            "bid": 0.1,
                            "ask": 0.14,
                            "symbol": "ST-USDT",
                            "instrumentId": 41
                        },
                        {
                            "channel": "ticker",
                            "bidSize": 101,
                            "askSize": 2,
                            "count": 27,
                            "open": 181,
                            "high": 181,
                            "low": 181,
                            "close": 181,
                            "volume": 130.151,
                            "amount": 23557.331000000002,
                            "bid": 0.1,
                            "ask": 186,
                            "symbol": "BEAT-USDT",
                            "instrumentId": 42
                        }
                    ]
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
                    type: 'interger',
                    optional: 'no',
                    sample: '1',
                    description: 'page'
                },
                {
                    key: 'paginate',
                    value: '10',
                    type: 'interger',
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
                                "id": "30d4e7dd-6286-11ee-9f6f-0243f897b3cc",
                                "spot_pair": 42,
                                "base_symbol": "USDT",
                                "coin_symbol": "BEAT",
                                "trade_pair_name": "BEAT/USDT",
                                "filled_value": 99.912,
                                "filled_price": 181,
                                "filled_qty": 0.552,
                                "buy_user_id": 562,
                                "sell_user_id": 562,
                                "buy_trading_fee": 0.005520000000000001,
                                "sell_trading_fee": 0.9991200000000001,
                                "filled_time": "2023-10-04T07:18:17.000Z"
                            },
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
                            }
                        ],
                        "pagination": {
                            "current_page": 1,
                            "from": 1,
                            "last_page": 9,
                            "per_page": 10,
                            "to": 10,
                            "total": 85
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
        {
            name: 'cancel all',
            description: "cancel all spot order (pending, partially_filled)",
            path: '/api/cancelAll',
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
                        "status": true,
                        "data": [
                            "565438d0-62a1-11ee-9f6f-0243f897b3cc",
                            "57325e87-62a1-11ee-9f6f-0243f897b3cc",
                            "57f7c37f-62a1-11ee-9f6f-0243f897b3cc",
                            "58da8134-62a1-11ee-9f6f-0243f897b3cc",
                            "5ab9c519-62a1-11ee-9f6f-0243f897b3cc"
                        ]
                    }
                }
            }
        },
        {
            name: 'cancel BATCH',
            description: "cancel batch spot order (pending, partially_filled)",
            path: '/api/cancel_batch',
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
                    key: 'order_list',
                    value: '[\"0072b01d-6330-11ee-9f6f-0243f897b3cc\",\"0492a56f-632f-11ee-9f6f-0243f897b3cc\"]',
                    type: 'array',
                    optional: 'no',
                    sample: '1',
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
                            "0072b01d-6330-11ee-9f6f-0243f897b3cc",
                            "0492a56f-632f-11ee-9f6f-0243f897b3cc",
                        ]
                    }
                }
            }
        },
    ]
};


