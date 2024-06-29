pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Bhashithajkak/Bus-Booking-System.git'
        BRANCH = 'main'
        APP_NAME = 'Bus Booking System'
        FRONTEND_IMAGE = 'bhashithajkak/bus-booking-system-frontend:latest'
        BACKEND_IMAGE = 'bhashithajkak/bus-booking-system-backend:latest'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clone Repository') {
            steps {
                retry(3) {
                    git branch: "${BRANCH}", url: "${REPO_URL}"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker-compose build'
                    } else {
                        bat 'docker-compose build'
                    }
                }
            }
        }

         stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerpass', variable: 'dockerpass')]) {
                    script {
                        bat "docker login -u bhashithajkak -p ${dockerpass}"
                    }
                }
            }
        }


        stage('Add tag to Image Frontend') {
            steps {
                bat 'docker tag bus_booking_system-frontend:latest bhashithajkak/bus_booking_new_frotend:latest'
            }
        }

        stage('Add tag to Image Backend') {
            steps {
                bat 'docker tag bus_booking_system-backend:latest bhashithajkak/bus_booking_new_backend:latest'
            }
        }

        stage('Push Image Frontend') {
            steps {
                bat 'docker push bhashithajkak/bus_booking_new_frotend:latest'
            }
        }

        stage('Push Image Backend') {
            steps {
                bat 'docker push bhashithajkak/bus_booking_new_backend:latest'
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }
    }
}
