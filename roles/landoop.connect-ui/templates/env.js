var clusters = [
    {
      NAME: "workspace",
      KAFKA_CONNECT: "http://{{ hostvars[inventory_hostname]['ipify_public_ip'] }}:8083",
      KAFKA_TOPICS_UI: "http://{{ hostvars[inventory_hostname]['ipify_public_ip'] }}:8085",
      KAFKA_TOPICS_UI_ENABLED: true
    }
  ];
