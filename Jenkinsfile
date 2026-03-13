pipeline {
    agent any

    environment {
        GITHUB_TOKEN = credentials('github-token')
        REPO = "Mohamed03738jd/TpCloud"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build production') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {

        success {
            echo "Build success"

            sh """
            curl -X POST https://api.github.com/repos/${env.REPO}/statuses/${env.GIT_COMMIT} \
            -H "Authorization: token ${env.GITHUB_TOKEN}" \
            -d '{"state":"success","description":"Pipeline succeeded","context":"jenkins-ci"}'
            """
        }

        failure {
            echo "Build failed"

            sh """
            curl -X POST https://api.github.com/repos/${env.REPO}/statuses/${env.GIT_COMMIT} \
            -H "Authorization: token ${env.GITHUB_TOKEN}" \
            -d '{"state":"failure","description":"Pipeline failed","context":"jenkins-ci"}'
            """
        }
    }
}