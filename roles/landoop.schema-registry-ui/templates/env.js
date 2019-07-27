var clusters = [
   {
       NAME: "workspace",
       // Schema Registry service URL (i.e. http://localhost:8081)
       SCHEMA_REGISTRY: "http://{{ hostvars[inventory_hostname]['ipify_public_ip'] }}:8081", // https://schema-registry.demo.landoop.com
       allowTransitiveCompatibilities: true,        // if using a Confluent Platform release >= 3.1.1 uncomment this line
       readonlyMode: true // optional
   }
];
