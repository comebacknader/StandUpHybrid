pipeline {
    agent any
    stages {
        stage('SCM Checkout') {
            steps {
                echo 'Checking out repository from Github'
                bat 'git clone https://github.com/comebacknader/StandUpHybrid.git'
                if(fileExists('StandUpHybrid')) {
                    dir('StandUpHybrid') {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Build step activated.'
            }
        }
        stage('Test') {
            steps {
                echo 'Test step activated.'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy step activated.'
            }
        }
    }
}
