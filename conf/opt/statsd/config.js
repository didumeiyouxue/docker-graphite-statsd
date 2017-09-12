{
  "graphiteHost": "127.0.0.1",
  "graphitePort": 2003,
  "port": 8125,
  "flushInterval": 10000,
  "debug": true,
  "percentThreshold": [95, 99],
  "backends": ["./backends/graphite", "./node_modules/statsd-zabbix-backend"],
  "zabbixPort": 10051,
  "zabbixHost": "localhost",
  "zabbixSender": "/usr/bin/zabbix_sender"
}
