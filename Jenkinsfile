pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            when { expression { return !fileExists('StandUpHybrid') }} 
            steps {
                echo 'Cloning repository from Github'
                bat 'git clone https://github.com/comebacknader/StandUpHybrid.git'
            }
        }
        stage('Pull Master Branch') {
            steps {
                echo 'Pulling master branch'
                dir('StandUpHybrid') {
                    bat 'git pull origin master'                    
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Build step activated.'
                dir('StandUpHybrid') {
                    echo 'Installing packages...'
                    bat 'npm install'
                    echo 'Building web application...'
                    bat 'expo build:web'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test step activated.'
                dir('StandUpHybrid') {
                    bat 'npm test'
                }
            }
        }
        stage('Deploy to S3') {
            steps {
                echo 'Deploy step activated.'
                // bat 'aws s3 cp /web-build s3://lia.'
            }
        }
    }
}
