pipeline {
    agent any

    environment {
        GITHUB_TOKEN = credentials('github-token')
        REPO = "Hajar875/cloud"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build production') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {

        success {
            echo "Build success"

            bat """
            curl -X POST https://api.github.com/repos/%REPO%/statuses/%GIT_COMMIT% ^
            -H "Authorization: token %GITHUB_TOKEN%" ^
            -d "{\\"state\\":\\"success\\",\\"description\\":\\"Pipeline succeeded\\",\\"context\\":\\"jenkins-ci\\"}"
            """
        }

        failure {
            echo "Build failed"

            bat """
            curl -X POST https://api.github.com/repos/%REPO%/statuses/%GIT_COMMIT% ^
            -H "Authorization: token %GITHUB_TOKEN%" ^
            -d "{\\"state\\":\\"failure\\",\\"description\\":\\"Pipeline failed\\",\\"context\\":\\"jenkins-ci\\"}"
            """
        }
    }
}