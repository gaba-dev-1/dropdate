<div align="center">
 
# 📅 Dropdate

### *Gaming calendar for releases & events*
 
[![Next.js](https://img.shields.io/badge/Next.js-7e22ce?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-0d9488?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Node.js](https://img.shields.io/badge/Node.js-a8a29e?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

*Keep track of gaming releases & events in a single tool*

---

## 📋 What we track

<table>
<tr>
<td align="center">

### 🎮 Releases
Game launches  
DLC drops  
Major updates

</td>
<td align="center">

### 🏆 Competitive
Tournaments  
League seasons  
Qualifiers

</td>
<td align="center">

### 🎉 Events
Beta tests  
Limited modes  
Collaborations

</td>
</tr>
</table>

---

## ⚡ Features

**🔔 Smart Notifications** • Email, Discord, browser push  
**📱 Platform Filters** • PC, console, mobile  
**📆 Calendar Sync** • Google, Apple, Outlook  
**👥 Community Driven** • Submit and verify dates  

---

## 🔌 API Access

Free public API for developers:

```bash
# Upcoming releases
GET /api/v1/releases?days=7

# Events by game
GET /api/v1/events?game=valorant

# Search all
GET /api/v1/search?q=tournament
```

---

## 🚀 Self-hosting

```bash
# Clone and run
git clone https://github.com/gaba-dev/dropdate.git
cd dropdate
docker-compose up -d

# Access at localhost:3000
```

---

[![Live Demo](https://img.shields.io/badge/Live_Demo-7e22ce?style=for-the-badge&logo=calendar&logoColor=white)](https://dropdate.net)

</div>
