import os

def listar_arquivos(diretorio):
    """
    Lista os arquivos de um diretório específico.

    Args:
        diretorio (str): O caminho do diretório a ser listado.

    Returns:
        list: Uma lista de nomes de arquivos presentes no diretório.
    """
    try:
        arquivos = os.listdir(diretorio)
        return arquivos
    except FileNotFoundError:
        return f"O diretório '{diretorio}' não foi encontrado."
    except Exception as e:
        return f"Ocorreu um erro: {str(e)}"