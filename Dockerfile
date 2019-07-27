FROM ubuntu:16.04

RUN apt-get update && apt-get install software-properties-common sudo -y
RUN apt-add-repository ppa:ansible/ansible -y
RUN apt-get update && apt-get install ansible git -y

ADD requirements.yml requirements.yml
RUN ansible-galaxy install -r requirements.yml

ADD all.yml all.yml
ADD ansible.cfg ansible.cfg
ADD hosts.yml hosts.yml
ADD docs docs
ADD plaintext plaintext
ADD roles roles
ADD sasl_ssl sasl_ssl
ADD ssl ssl
RUN ansible-playbook --list-hosts all.yml -i hosts.yml
RUN XDG_RUNTIME_DIR=/run/user/0 ansible-playbook all.yml -i hosts.yml
