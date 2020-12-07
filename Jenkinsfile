pipeline {
    agent any
    stages {
        stage('SCM Checkout') {
            when { expression { return !fileExists('StandUpHybrid') }} 
            steps {
                echo 'Checking out repository from Github'
                bat 'git clone https://github.com/comebacknader/StandUpHybrid.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Build step activated.'
                dir('StandUpHybrid') {
                    echo 'npm install running...'
                    bat 'npm install'
                }
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
