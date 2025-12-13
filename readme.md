
 📌 AUTOMATED CI/CD PIPELINE USING GITHUB ACTIONS (NODE.JS → EC2)

This project demonstrates a fully automated **CI/CD pipeline** built using **GitHub Actions** to deploy a **Node.js application** on an **AWS EC2 instance**.
The pipeline follows DevOps best practices to ensure **zero downtime deployments**, secure access, automated testing, rollback handling, and faster release cycles.

---

⭐ Project Summary (Using STAR Method)

S – Situation

I wanted to automate deployments for a Node.js application hosted on an AWS EC2 instance. Manual deployments were time-consuming, error-prone, and caused brief service interruptions during updates.

T – Task

My objective was to design and implement a **CI/CD pipeline** that:

* Automatically builds, tests, and deploys the application on every code push
* Ensures **zero downtime**
* Uses **secure authentication**
* Includes **rollback logic** in case of failures

A – Action

* Configured **GitHub Actions workflows** to trigger on pushes to the main branch
* Installed dependencies and ran automated test cases in the CI stage
* Packaged the Node.js application for deployment
* Used **SSH with encrypted GitHub Secrets** to securely connect to the EC2 instance
* Pulled the latest code on EC2 and restarted the application service
* Implemented **health checks** to verify successful deployment
* Added **rollback logic** to restore the previous stable version if deployment failed
* Documented the entire pipeline for maintainability and reuse

R – Result

* Deployment time reduced from several minutes to **under 30 seconds**
* Achieved **fully automated, zero-downtime deployments**
* Improved release reliability and consistency
* Demonstrated strong hands-on skills in **DevOps automation and cloud deployment**

---

🏗️ Architecture Overview

```
Developer Push → GitHub Repository
        ↓
GitHub Actions CI/CD Workflow
        ↓
Build & Test Node.js App
        ↓
Secure SSH Deployment
        ↓
AWS EC2 Instance
        ↓
Restart Service + Health Check
```

---

🛠️ Tech Stack

| Component      | Purpose                        |
| -------------- | ------------------------------ |
| GitHub Actions | CI/CD automation               |
| Node.js        | Application runtime            |
| AWS EC2        | Hosting compute instance       |
| SSH            | Secure server access           |
| GitHub Secrets | Secure credentials management  |
| PM2 / Systemd  | Application process management |
| Linux (Ubuntu) | EC2 operating system           |

---

🚀 CI/CD Pipeline Workflow – Step by Step

✅ Step 1: Prepare EC2 Instance

* Launch an EC2 instance (Ubuntu)
* Install:

  ```bash
  sudo apt update
  sudo apt install nodejs npm -y
  ```
* Install PM2:

  ```bash
  npm install -g pm2
  ```
* Clone the Node.js application repository

---

✅ Step 2: Configure SSH Access

* Generate SSH key pair on local system
* Add **private key** to GitHub Secrets:

  * `EC2_SSH_KEY`
* Add server details as secrets:

  * `EC2_HOST`
  * `EC2_USER`

---

✅ Step 3: Create GitHub Actions Workflow

📁 `.github/workflows/deploy.yml`

Key stages:

* Checkout source code
* Install dependencies
* Run tests
* SSH into EC2
* Pull latest changes
* Restart application
* Perform health checks
* Rollback on failure

---

✅ Step 4: Deployment & Health Check

* Application restarted using PM2 or Systemd
* Health endpoint validated
* Pipeline fails automatically if health check fails

---

✅ Step 5: Rollback Strategy

* Previous stable version retained on server
* On deployment failure:

  * Revert to last working build
  * Restart application automatically

---

 🧪 Pipeline Trigger

The pipeline runs automatically on:

```text
git push origin main
```

No manual intervention required 🚀

---

📌 Key Learning Outcomes

* Designing end-to-end CI/CD pipelines
* Automating Node.js deployments using GitHub Actions
* Secure secret management with GitHub Secrets
* Zero-downtime deployment strategies
* SSH-based cloud deployments
* Rollback and failure recovery techniques
* Production-ready DevOps documentation

---

 📚 Future Enhancements

* Add Docker-based deployment
* Implement Blue-Green or Canary deployments
* Integrate AWS Load Balancer
* Add Slack / Email notifications
* Introduce Infrastructure as Code using Terraform
* Add security scanning (Snyk / Trivy)

---

 🤝 Get In Touch

I am open to discussing **DevOps, Cloud Engineering, and CI/CD automation** opportunities.

**📧 Email:** [nipuntyagi983@gmail.com](mailto:nipuntyagi983@gmail.com)
**🔗 LinkedIn:** [https://www.linkedin.com/in/nipun-bhardwaj-6312a9265](https://www.linkedin.com/in/nipun-bhardwaj-6312a9265)
**💻 GitHub:** [https://github.com/nipun-10](https://github.com/nipun-10)

