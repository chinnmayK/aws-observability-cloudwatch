
---

# 📊 Smart Order Log Processor – AWS Observability Project

## 📌 Project Overview

**Smart Order Log Processor** is a **log-driven background processing system** built to demonstrate **end-to-end observability on AWS** using **CloudWatch Logs and Monitoring features**.

The project focuses on **logs as the source of truth** and shows how logs can be:

* Collected
* Queried
* Analyzed
* Used for anomaly detection
* Converted into metrics
* Used to trigger real-time alerts

🚫 This is **not an API health check project**
✅ This is a **real DevOps / SRE-style observability system**

---

## 🧠 What the Application Does

* Runs as a **background worker**
* Simulates continuous **order processing**
* Randomly generates:

  * Successful orders
  * Payment failures
  * Delayed processing
  * Duplicate orders
* Emits **structured JSON logs**
* Runs continuously on **AWS EC2**
* Uses **CloudWatch Logs as the primary monitoring signal**

---

## 🏗️ High-Level Architecture

```
Node.js Worker (EC2)
   ↓
Structured JSON Logs
   ↓
CloudWatch Agent
   ↓
CloudWatch Logs
   ├─ Live Tail
   ├─ Logs Insights
   ├─ Contributor Insights
   ├─ Log Anomaly Detection
   ↓
Log Metric Filter
   ↓
Custom Metric (SmartOrders / PaymentFailures)
   ↓
CloudWatch Alarm
   ↓
SNS Topic
   ↓
Email Notification
```

---

## 🛠️ Tech Stack

### Application

* Node.js
* Shell scripts

### AWS Services

* EC2 (compute)
* IAM (users & roles)
* CloudWatch Logs
* CloudWatch Logs Insights
* CloudWatch Contributor Insights
* CloudWatch Log Anomaly Detection
* CloudWatch Metrics & Alarms
* SNS (email notifications)
* AWS Systems Manager (SSM – no SSH)

---

## 🗂️ Repository Structure

```
smart-order-log-processor/
├── worker.js              # Background order processor
├── run-worker.sh          # Local execution script
├── start-worker.sh        # EC2 execution script
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

---

## 📄 Sample Log Format (JSON)

```json
{
  "timestamp": "2026-01-12T07:11:52.386Z",
  "orderId": "ORD-e593fe",
  "customerId": "CUST-9",
  "event": "PAYMENT_FAILED",
  "amount": 391,
  "processingTimeMs": 0
}
```

Structured logs enable:

* Logs Insights queries
* Contributor Insights
* Anomaly Detection
* Metric Filters

---

# 🚀 Implementation – Phase by Phase

---

## 🟦 PHASE 0 — AWS & Local Foundations

### What was done

* Created IAM user for CLI access
* Configured AWS CLI locally
* Created EC2 IAM Role with:

  * CloudWatchAgentServerPolicy
  * AmazonSSMManagedInstanceCore

### Why

* Secure access (no root usage)
* Allow EC2 to push logs to CloudWatch
* Enable SSM access (no SSH keys)

---

## 🟦 PHASE 1 — Application Development (Local)

### What was done

* Built Node.js background worker
* Generated random order events
* Implemented structured JSON logging
* Added shell script for execution

### Why

* Logs are the primary signal
* Structured logs enable advanced CloudWatch features

---

## 🟦 PHASE 2 — GitHub Integration

### What was done

* Initialized Git repository
* Created `.gitignore`
* Added project documentation
* Pushed code to GitHub

### Why

* Source of truth
* Enables CI/CD or future automation

---

## 🟦 PHASE 3 — EC2 Setup

### What was done

* Launched Amazon Linux EC2 instance
* Attached IAM role
* Used **SSM Session Manager** (no SSH)
* Installed Node.js & Git

### Why

* Secure access
* Production-like environment
* Best practice EC2 management

---

## 🟦 PHASE 4 — CloudWatch Logs Integration

### What was done

* Installed CloudWatch Agent
* Configured log file monitoring
* Redirected application logs to `/var/log/smart-order.log`
* Verified logs in CloudWatch

### Why

* Centralized log management
* Foundation for all observability features

---

## 🟦 PHASE 5 — Live Tail & Logs Insights

### Live Tail

* Viewed logs in real time
* Debugged system behavior live

### Logs Insights

* Queried logs using SQL-like syntax
* Analyzed:

  * Failed payments
  * Slow orders
  * Recent events
  * Failure trends

### Why

* Real-time debugging
* Post-incident analysis

---

## 🟦 PHASE 6 — Contributor Insights

### What was done

* Created Contributor Insights rule
* Grouped failures by `customerId`
* Identified top contributors to failures

### Why

* Find noisy customers
* Identify systemic issues
* Reduce MTTR in production

---

## 🟦 PHASE 7 — Log Anomaly Detection

### What was done

* Enabled anomaly detection on log group
* Filtered on `PAYMENT_FAILED`
* Allowed CloudWatch to learn baseline behavior
* Detected abnormal spikes

### Why

* No static thresholds
* Adaptive, ML-based monitoring
* Production-grade observability

---

## 🟦 PHASE 8 — Log Metric Filters & Alarms

### What was done

* Created log metric filter:

  * PAYMENT_FAILED → metric
* Created custom metric:

  ```
  SmartOrders / PaymentFailures
  ```
* Built CloudWatch alarm:

  * Trigger if ≥ 5 failures in 1 minute
* Integrated SNS email notifications

### Result

* Alarm triggered successfully
* Email notification received

### Why

* Automated alerting
* Logs → Metrics → Alerts pipeline

---

## 🟦 PHASE 9 — Log Management & Cost Control

### What was done

* Set log retention to **7 days**

### Why

* Prevent uncontrolled log growth
* Control CloudWatch costs
* Follow governance best practices

---

## 🟦 PHASE 10 — Finalization & Documentation

### What was done

* Final architecture review
* Resume-ready explanations
* Interview-ready project story
* Complete documentation

---

## 📌 Key AWS Concepts Demonstrated

* CloudWatch Logs Management
* Live Tail
* Logs Insights
* Contributor Insights
* Log Anomaly Detection
* Log Metric Filters
* Custom Metrics
* CloudWatch Alarms
* SNS Notifications
* IAM roles & policies
* EC2 with SSM
* Shell scripting

---

## 🎯 Resume-Ready Summary

> Built a production-grade AWS observability pipeline using CloudWatch Logs, Insights, Contributor Insights, anomaly detection, metric filters, and alarms to monitor a log-driven order processing system with real-time alerting via SNS.

---

## 🧪 How to Run Locally

```bash
npm install
chmod +x run-worker.sh
./run-worker.sh
```

---

## 🧠 Key Learning Outcome

This project demonstrates how **logs can drive monitoring**, how **metrics can be derived from logs**, and how **alerts can be automated** — exactly how real DevOps and SRE teams operate.

---

## 🏁 Final Status

✅ All phases completed
✅ All CloudWatch features exercised
✅ Alerts verified
✅ Production-ready observability setup

---

