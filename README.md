Ben's Udacity Notes:
------------------------------------------------------------------------------------------------

This installs the following components on localhost:
• Zookeeper (single member ensemble)
• Kafka (single member cluster)
• Kafka Connect
• Schema Registry
• KSQL
• REST Proxy
• Kafka CLI Tools
• Postgres
• Landoop Kafka Topics UI
• Landoop Schema Registry UI
• Landoop Kafka Connect UI

On a workspace host:
```
git clone https://github.com/benjigoldberg/cp-ansible.git
cd cp-ansible
git checkout 5.3.0-post
sh install.sh
```


Confluent Notes:
------------------------------------------------------------------------------------------------
Please note that these playbooks are provided without support and are intended to be a guideline. Any issues encountered can be reported via the GitHub issues and will be addressed on a best effort basis. Pull requests are also encouraged.

# Introduction

Ansible provides a simple way to deploy, manage, and configure the Confluent Platform services. This repository provides playbooks and templates to easily spin up a Confluent Platform installation. Specifically this repository:

* Installs Confluent Platform packages
* Starts services using systemd scripts
* Provides configuration options for plaintext, SSL, and SASL_SSL communication amongst the services

The services that can be installed from this repository are:

* ZooKeeper
* Kafka
* Schema Registry
* REST Proxy
* Confluent Control Center
* Kafka Connect (distributed mode)

# Documentation

You can find the documentation for running this playbook at https://docs.confluent.io/current/tutorials/cp-ansible.html.
