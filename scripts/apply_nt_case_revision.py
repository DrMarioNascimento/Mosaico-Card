#!/usr/bin/env python3
import json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
CASE_PATH = ROOT / "docs" / "revisoes" / "nt2-mateus-ais-juramentos.json"
BANK_PATH = ROOT / "data" / "nt-bank.json"

def main():
    case = json.loads(CASE_PATH.read_text(encoding="utf-8"))
    if "fields" not in case:
        raise SystemExit("snapshot incompleto: falta fields/cards")
    bank = json.loads(BANK_PATH.read_text(encoding="utf-8"))
    idx = next(i for i, item in enumerate(bank["cases"]) if item["id"] == case["id"])
    bank["cases"][idx] = case
    BANK_PATH.write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("replaced", case["id"], "at", idx)
    print(case["question"])
    return 0

if __name__ == "__main__":
    sys.exit(main())
