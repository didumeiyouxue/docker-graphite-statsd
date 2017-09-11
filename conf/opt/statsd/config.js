{
  "graphiteHost": "127.0.0.1",
  "graphitePort": 2003,
  "port": 8125,
  "flushInterval": 10000
  backends: [ "./backends/graphite", "statsd-zabbix-backend" ],
  zabbixPort: 10051,
  zabbixHost: "10.10.0.52",
  zabbixSender: "/usr/bin/zabbix_sender"
}
