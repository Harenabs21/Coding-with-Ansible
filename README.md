# Writing a script Using ANSIBLE
This repository is used for a typical tutorial of writing a script that make automatic domain name with `Apache2` and [Ansible](https://ansible.com)
## Tools used
- VMware Workstation Pro
- Debian 11

## Installation
First of all, you need to be in mode `sudo` in linux distribution or `su` in debian. Next, you have to update te list of packets using
```sh
sudo apt update
```
After that, you can install it with the next command:
```sh
sudo apt install ansible
```
To check if ansible is really installed succesfully, use the command `ansible --version`. The output should be like below:
```sh
ansible 2.10.8
  config file = None
  configured module search path = ['/root/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python3/dist-packages/ansible
  executable location = /usr/bin/ansible
  python version = 3.9.2 (default, Feb 28 2021, 17:03:44) [GCC 10.2.1 20210110]

```
&nbsp;
> NOTE: I use debian for this tutorial, so I used the `apt`. There is another way for installing ansible that you can see at [Documentation for ansible](https://docs.ansible.com/)

See you for the next step!

## Running the ansible playbook
Let me introduce all tasks that the `config.yaml` do:
  - Install `Apache2` if you don't have it yet
  - Create the directory for the websites
  - Create the data of the website
  - Create the configuration wit the Apache2 service
  - Enable the sites and dissite the default website of apache2 
  - Add serversname in hosts file 

To run the playbook, you just have to run the command below:
```sh
sudo ansible-playbook path/directory/file.yaml
```