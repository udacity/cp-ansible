sudo apt-add-repository ppa:ansible/ansible -y
sudo apt-get update
sudo apt-get install ansible git -y


sudo ansible-galaxy install -r requirements.yml
sudo ansible-playbook all.yml -i hosts.yml
