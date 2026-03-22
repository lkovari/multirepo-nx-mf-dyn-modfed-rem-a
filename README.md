# multirepo-nx-mf-dyn-modfed-rem-a
app-a-remote app of Multirepo nx microfrontend dynamic module federation

- nxdmfmf-main-host/
- nxdmfmf-remote-a/
- nxdmfmf-remote-b/
- nxdmfmf-remote-c/
- platform-contracts/
- platform-ui-shoelace/

pnpm dlx create-nx-workspace@latest nxdmfmf-remote-a-workspace \
  --preset=angular-monorepo \
  --appName=nxdmfmf-remote-a \
  --style=css \
  --packageManager=pnpm \
  --nxCloud=skip \
  --interactive=false