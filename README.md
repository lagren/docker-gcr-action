# docker-gcr-action

![.github/workflows/main.yml](https://github.com/lagren/docker-gcr-action/workflows/.github/workflows/main.yml/badge.svg)

[GitHub Action](https://github.com/features/actions) for allowing Docker to push images to [Google Cloud Container Regitry](https://cloud.google.com/container-registry).

Requirements:
- Google Service Account Key
- Registry host (`gcr.io`, `asia.gcr.io`, `eu.gcr.io`, or `us.gcr.io`)

Example usage:
```yaml
- name: Login Docker
  uses: 'lagren/docker-gcr-action@master'
  with:
    SERVICE_ACCOUNT_KEY: ${{ secrets.SERVICE_ACCOUNT_KEY }}
    HOST: 'gcr.io'

```
