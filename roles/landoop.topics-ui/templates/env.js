var clusters = [
    {
      NAME: "workspace",
      KAFKA_REST: "http://{{ hostvars[inventory_hostname]['ipify_public_ip'] }}:8082",
      MAX_BYTES: "50000",
      RECORD_POLL_TIMEOUT: "3000",
      DEBUG_LOGS_ENABLED: true,
      LAZY_LOAD_TOPIC_META: false
    }
  ];
