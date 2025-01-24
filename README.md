# String Calculator (TDD Kata)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An implementation of the [Incubyte's String Calculator Kata](https://blog.incubyte.co/blog/tdd-assessment/) following Test-Driven Development (TDD) principles, built with TypeScript and Jest. In this project I demonstrated clean code practices, comprehensive test coverage, and professional development workflows.

---

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
</p>

## Key Features

- **TDD Implementation**: Strict red-green-refactor cycle with atomic commits
- **Robust Validation**:
  - Empty string handling → `0`
  - Negative number detection with descriptive errors
  - Custom delimiter support (`//[delimiter]\n...`)
- **100% Test Coverage**: Comprehensive test suite with edge cases
- **CI/CD Pipeline**: Automated testing via GitHub Actions
- **Type Safety**: Full TypeScript implementation with strict checks

## Tech Stack

- **Language**: TypeScript
- **Testing**: Jest + ts-jest
- **Package Manager**: npm
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Code Quality**: 100% test coverage enforced

## Installation

### Prerequisites
- Node.js v18+
- npm v9+

```bash
# Clone repository
git clone https://github.com/jayateerthdambal/string-calculator-tdd.git
cd string-calculator-tdd

# Install dependencies
npm ci  # Uses exact versions from package-lock.json
```