export function formatDocumentCpfCnpj(document: string) {
  if (document) {
    return document.replace('.', '').replace('.', '').replace('-', '')
  }
}
